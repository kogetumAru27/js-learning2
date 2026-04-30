import { NextResponse,NextRequest } from "next/server";
export function middleware(request:NextRequest){
    console.log("アクセスされたurl",request.url);
    if(request.nextUrl.pathname === `/practice2`){
        return NextResponse.redirect(new URL(`/`,request.url))
    }
    return NextResponse.next();
}
export const config = {
    matcher:"/:path*"
}