import { NextResponse } from "next/server";

export function proxy(request) {
  const { pathname } = request.nextUrl;

  // Protect the /add-item route
  if (pathname === "/add-coffee") {
    // Check for authentication cookie
    const authCookie = request.cookies.get("auth-token");

    if (!authCookie) {
      // Redirect to login with callback URL
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(loginUrl);
    }

    try {
      const authData = JSON.parse(authCookie.value);
      if (!authData.isAuthenticated) {
        const loginUrl = new URL("/login", request.url);
        loginUrl.searchParams.set("callbackUrl", pathname);
        return NextResponse.redirect(loginUrl);
      }
    } catch (error) {
      // Invalid cookie format
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/add-coffee"],
};
