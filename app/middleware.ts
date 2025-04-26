// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const role = request.cookies.get("role")?.value;
  const { pathname } = request.nextUrl;

  const isLoginPage = pathname === "/login";
  const isDashboard = pathname.startsWith("/dashboard");
  const isDriver = pathname.startsWith("/driver");

  // Redirect unauthenticated users trying to access protected routes
  if ((isDashboard || isDriver) && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Redirect users with wrong roles
  if (isDashboard && role !== "admin") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isDriver && role !== "driver") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// Enable middleware only for specific paths
export const config = {
  matcher: ["/dashboard/:path*", "/driver/:path*"],
};
