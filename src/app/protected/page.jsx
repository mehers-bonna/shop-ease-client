import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Protected Page</h1>
      <p>Welcome, {session.user?.name || session.user?.email}</p>
    </div>
  );
}
