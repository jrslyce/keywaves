import { NextAuthOptions } from "next-auth";
import TwitchProvider from "next-auth/providers/twitch";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/app/lib/prisma";
import { Session } from "next-auth"; // Add this import

// Extend the Session type
interface CustomSession extends Session {
  user: {
    id: string;
    role?: string;
    twitchId?: string; // Add twitchId here
  };
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    TwitchProvider({
      clientId: process.env.TWITCH_CLIENT_ID as string,
      clientSecret: process.env.TWITCH_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === 'twitch') {
        await prisma.user.update({
          where: { id: user.id },
          data: { twitchId: account.providerAccountId },
        });
      }
      return true;
    },
    async session({ session, user }: { session: CustomSession; user: any }) {
      if (session.user) {
        session.user.id = user.id;
        session.user.role = user.role as string | undefined;
        session.user.twitchId = user.twitchId as string | undefined;
      }
      return session;
    },
  },
};