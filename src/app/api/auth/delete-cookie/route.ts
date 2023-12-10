import { cookies } from "next/headers";

export async function POST(request: Request) {
  const cookieStore = cookies();
  const response = request.json();
  const data = await response;
  console.log(data);
  if (data) {
    const { cookieName } = data;
    cookieStore.delete(cookieName);
    cookieStore.delete("next-auth.csrf-token");
    cookieStore.delete("next-auth.callback-url");
  }
  // response.then((data) => {
  //   const { cookieName } = data;
  //   console.log(cookieName);
  //   cookieStore.delete(`access_token`);
  // });

  // Your other logic here

  return new Response("Cookie deleted", { status: 200 });
}
