import { NextAuthOptions, Session } from "next-auth"; // Added Session import
import TwitchProvider from "next-auth/providers/twitch";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/app/lib/prisma";
import { AdapterUser } from "next-auth/adapters"; // Import AdapterUser

interface CustomSession extends Session {
  user: {
    id: string;
    role?: string;
    twitchId?: string; // Ensure this is defined
  };
}

interface CustomUser extends AdapterUser {
  twitchId?: string; // Extend AdapterUser to include twitchId
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
    async session({ session, user }: { session: Session; user: CustomUser }) {
      if (session.user) {
        session.user.id = user.id;
        session.user.role = user.role as string | undefined;
        const customSession = session as CustomSession;
        customSession.user.twitchId = user.twitchId; // No need for type assertion
      }
      return session;
    },
  },
};