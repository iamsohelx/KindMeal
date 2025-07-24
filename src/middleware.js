'use server'
import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request) {

   const cookie = request.cookies.get("token")
   const accType = request.cookies.get("accType");
   
   if(cookie && accType.value == "Restaurant")
     return NextResponse.redirect(new URL('/restro-dashboard', request.url))
  
   if(cookie && accType.value == "NGO")
     return NextResponse.redirect(new URL('/ngo-dashboard', request.url))
  
   
}
 
export const config = {
  matcher: ['/login', '/sign-up']
}