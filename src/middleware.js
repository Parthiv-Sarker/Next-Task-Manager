import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
	const path = request.nextUrl.pathname;
	const isPublicPath = path === "/login" || path === "/signup";
	const token = request.cookies.get("authToken")?.value;

    if(isPublicPath && token){
        return NextResponse.redirect(new URL("/dashboard/home",request.nextUrl));
    }

    if(!isPublicPath && !token){
        return NextResponse.redirect(new URL("/home",request.nextUrl));
    }
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: ["/", "/login", "/signup", "/dashboard/:path*"],
};
