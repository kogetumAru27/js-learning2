import { NextRequest,NextResponse } from "next/server";
export function middleware(request:NextRequest){
    console.log("アクセスしたurl",request.url);
    if(request.nextUrl.pathname === `/dashboard`){
        if(!request.cookies.get(`token`)){
            return NextResponse.redirect(new URL(`/login`,request.url));
        }
    }
    return NextResponse.next();
}
export const confing ={
    matcher:"/:path*"
}