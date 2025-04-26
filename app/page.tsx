// app/page.tsx
import { validateRole } from "@/lib/auth";  // Import validateRole
import { redirect } from "next/navigation";

export default async function Home() {
  // Validate session and role. If no valid session, redirect to login page.
  const session = await validateRole('admin');  // 'admin' or 'driver' based on your needs
  
  if (!session?.user) {
    // If session is not available, redirect to login page.
    redirect("/login");
  }

  // If authenticated, redirect based on role
  if (session.user.role === "driver") {
    redirect("/driver-dashboard");
  } else if (session.user.role === "admin") {
    redirect("/dashboard");
  }

  // Default fallback (although we already handle this above)
  redirect("/login");
}
