export function GET(request) {
  console.log('GET request', request);

  //   return new Response.json();
  return new Response('Hello!');
}

// export function POST(request) {}
