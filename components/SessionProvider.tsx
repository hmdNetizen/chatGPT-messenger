"use client";

import { SessionProvider as Provider } from "next-auth/react";
import { Session } from "next-auth";

type Prop = {
  children: React.ReactNode;
  session: Session | null;
};

const SessionProvider = ({ session, children }: Prop) => {
  return <Provider session={session}>{children}</Provider>;
};

export default SessionProvider;
