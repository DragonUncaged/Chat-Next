import { authOptions } from "@/app/lib/auth";
import NextAuth from "next-auth/next";

const authOptionsWithNoCache = {
    ...authOptions,
    cache: false,
  }

const handler = NextAuth(authOptionsWithNoCache);
export { handler as GET, handler as POST };