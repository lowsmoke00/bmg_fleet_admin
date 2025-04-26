// lib/auth.ts
import { authOptions } from "@/lib/auth-options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export async function validateRole(allowedRoles: string | string[]) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    redirect("/login");
  }

  const roles = Array.isArray(allowedRoles) ? allowedRoles : [allowedRoles];
  const userRole = session.user.role;

  if (!roles.includes(userRole)) {
    // Redirect to the correct dashboard if they are logged in but not allowed
    if (userRole === "admin") {
      redirect("/dashboard");
    } else if (userRole === "driver") {
      redirect("/driver-dashboard");
    } else {
      redirect("/login");
    }
  }

  return session;
}
