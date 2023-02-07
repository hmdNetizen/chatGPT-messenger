"use client";

import NewChat from "./NewChat";
import { useSession } from "next-auth/react";

const SideBar = () => {
  const { data: session } = useSession();
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          {/* New Chat */}
          <NewChat />

          <div>{/* Model Selection */}</div>

          {/* Map through ChatRows */}
        </div>
      </div>
      {session && (
        <img
          src={session.user?.image!}
          alt="Profile Picture"
          className="w-12 h-12 mx-auto mb-2 rounded-full cursor-pointer hover:opacity-50"
        />
      )}
    </div>
  );
};

export default SideBar;
