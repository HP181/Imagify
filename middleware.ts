import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
    '/', 
    '/profile(.*)',
    '/transformations(.*)',
    '/credit(.*)'
    // '/profile'
  ]);

  export default clerkMiddleware((auth, req) => {
    publicRoutes: ["/"]
    // if (isProtectedRoute(req)) auth().protect();
  });

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};