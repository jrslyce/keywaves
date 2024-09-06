import NextAuth, { DefaultSession, AuthOptions } from "next-auth"
import TwitchProvider from "next-auth/providers/twitch"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "@/app/lib/prisma"

declare module "next-auth" {
  interface Session extends DefaultSession {
    user?: {
      id: string;
      role: string;
    } & DefaultSession["user"]
  }

  interface User {
    role: string;
  }
}

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    TwitchProvider({
      clientId: process.env.TWITCH_CLIENT_ID!,
      clientSecret: process.env.TWITCH_CLIENT_SECRET!,
    }),
    // Add other providers here (TikTok, YouTube, Instagram)
  ],
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
        session.user.role = user.role;
      }
      return session;
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
