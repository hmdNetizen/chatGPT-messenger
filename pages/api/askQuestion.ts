// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { query } from "../../lib/queryApi";
import admin from "firebase-admin";
import { adminDB } from "../../firebaseAdmin";

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt, session, chatId, model } = req.body;

  if (!prompt) {
    return res.status(400).json({ answer: "Please provide a prompt" });
  }

  if (!chatId) {
    return res.status(400).json({ answer: "Please provide a valid chat ID" });
  }

  //   ChatGPT query
  const response = await query(prompt, model);

  const message: Message = {
    text: response || `ChatGPT is unable to find an answer for that!`,
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: "ChatGPT",
      name: "ChatGPT",
      avatar: "https://links.papareact.com/89k",
    },
  };

  await (
    await adminDB
      .collection("users")
      .doc(session?.user?.email)
      .collection("chats")
      .add(chatId)
  )
    .collection("messages")
    .add(message);

  res.status(200).json({ answer: message.text });
}
