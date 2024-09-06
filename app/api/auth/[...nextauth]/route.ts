import NextAuth from "next-auth";
import { authOptions } from "@/app/api/auth-options"; // Adjusted import path

export const GET = NextAuth(authOptions);
export const POST = NextAuth(authOptions);
