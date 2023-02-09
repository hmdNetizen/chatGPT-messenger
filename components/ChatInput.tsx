"use client";

import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { db } from "../firebase";

type Props = {
  chatId: string;
};

const ChatInput = ({ chatId }: Props) => {
  const [prompt, setPrompt] = useState("");
  const model = "text-davinci-03";

  const { data: session } = useSession();

  const sendMessage = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (!prompt) return;

    const input = prompt.trim();
    setPrompt("");

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar:
          session?.user?.image! ||
          `https://ui-avatars.com/api/?name/${session?.user?.name}`,
      },
    };

    await addDoc(
      collection(
        db,
        "users",
        session?.user?.email!,
        "chats",
        chatId,
        "messages"
      ),
      message
    );

    // Toast notification

    fetch(`/api/askQuestion`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        prompt: input,
        chatId,
        model,
        session,
      }),
    });
  };

  return (
    <div className="bg-gray-700/50 text-sm text-gray-400 rounded-lg">
      <form className="p-5 space-x-5 flex">
        <input
          onSubmit={sendMessage}
          type="text"
          placeholder="Type your message here..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="flex-1 focus:outline-none bg-transparent "
          disabled={!session}
        />
        <button
          type="submit"
          disabled={!prompt || !session}
          className="bg-[#11A37F] px-4 py-2 text-white font-bold rounded hover:opacity-50 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          <PaperAirplaneIcon className="w-4 h-4 -rotate-45" />
        </button>
      </form>
      <div>{/* Model Selection */}</div>
    </div>
  );
};

export default ChatInput;
