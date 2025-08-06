import { Link } from "wouter";

export const Page404 = () => {
  return (
    <main className=" bg-gray-900 text-white p-10 h-screen text-center">
      <h1>Page Not Found :C - 404</h1>
      <Link href="/" className="underline">
        Go Home
      </Link>
    </main>
  );
};
