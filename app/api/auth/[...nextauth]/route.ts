import NextAuth from "next-auth"
import TwitchProvider from "next-auth/providers/twitch"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "@/app/lib/prisma"

const handler = NextAuth({
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
})

export { handler as GET, handler as POST }
