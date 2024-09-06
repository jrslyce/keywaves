import NextAuth from "next-auth";
import { authOptions } from "./auth-options"; // Assuming you have your auth options in a separate file

export const GET = NextAuth(authOptions);
export const POST = NextAuth(authOptions);
