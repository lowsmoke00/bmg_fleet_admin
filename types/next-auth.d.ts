// next-auth.d.ts
import "next-auth";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      role: "admin" | "driver";
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    email: string;
    role: "admin" | "driver";
    password?: string; // Only if you need it
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    email: string;
    role: "admin" | "driver";
  }
}

// Extend the SignInResponse type
declare module "next-auth/react" {
  interface SignInResponse {
    error?: string;
    status?: number;
    ok?: boolean;
    url?: string | null;
    user?: {
      id: string;
      email: string;
      role: "admin" | "driver";
    };
  }
}