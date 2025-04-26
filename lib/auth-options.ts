// lib/auth-options.ts
import { AuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

type UserRole = "admin" | "driver";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<User | null> {
        const user: User & { role: UserRole } = {
          id: "1",
          name: "John Doe",
          email: "admin@example.com",
          role: credentials?.username === "driver" ? "driver" : "admin",
        };
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.role) {
        session.user.role = token.role as UserRole;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};
