import { NextResponse } from 'next/server';

export default function middleware(request) {
  //   console.log('request', request);

  return NextResponse.next();
}

export const config = {
  matcher: '/news',
};
