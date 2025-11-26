"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleCredentialsLogin = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (!res.error) router.push("/");
    else alert("Invalid credentials");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="p-8 border rounded shadow-md w-96">
        <h1 className="text-2xl font-bold text-black text-center mb-4">Login Now</h1>

        <form onSubmit={handleCredentialsLogin} className="flex flex-col space-y-3 text-black">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 rounded"
            required
          />
          <button type="submit" className="bg-purple-400 hover:bg-purple-800 text-white py-2 rounded">
            Login
          </button>
        </form>
        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="w-full flex items-center justify-center gap-2 bg-white text-black py-2 rounded mb-4 my-5 border"
        >
          <FcGoogle className="text-lg" />
          <span>Login with Google</span>
        </button>
        <p className="text-black text-center mt-2">
          New to our website? Please{" "}
          <Link href="/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
