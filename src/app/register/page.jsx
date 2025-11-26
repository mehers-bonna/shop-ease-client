"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/auth/registerUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    if (res.ok) {
      alert("Registered successfully");
      router.push("/login");
    } else alert("Registration failed");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="p-8 border rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-black text-center">Register Now</h1>

        <form onSubmit={handleRegister} className="flex flex-col space-y-3 text-black">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded"
            required
          />
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
            Register
          </button>
        </form>

        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="w-full flex items-center justify-center gap-2 bg-white text-black py-2 rounded mt-4 border"
        >
          <FcGoogle className="text-lg" />
          <span>Login with Google</span>
        </button>
        <p className="text-black text-center mt-2">
          Already have an account? Please{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
