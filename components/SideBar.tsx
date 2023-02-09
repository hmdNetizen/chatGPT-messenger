"use client";
import { useCollection } from "react-firebase-hooks/firestore";

import NewChat from "./NewChat";
import { useSession, signOut } from "next-auth/react";
import { db } from "../firebase";
import { collection, orderBy, query } from "firebase/firestore";
import ChatRow from "./ChatRow";

const SideBar = () => {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session?.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );

  console.log(chats);

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          {/* New Chat */}
          <NewChat />

          <div>{/* Model Selection */}</div>

          {/* Map through ChatRows */}
          {chats?.docs.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>
      {session && (
        <img
          onClick={() => signOut()}
          src={session.user?.image!}
          alt="Profile Picture"
          className="w-12 h-12 mx-auto mb-2 rounded-full cursor-pointer hover:opacity-50"
        />
      )}
    </div>
  );
};

export default SideBar;
