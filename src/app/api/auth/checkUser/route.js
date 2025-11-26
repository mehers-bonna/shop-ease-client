import bcrypt from "bcryptjs";

export async function POST(req) {
  const { email, password } = await req.json();

  // get all registered users
  const users = global.users || [];

  const user = users.find(u => u.email === email);
  if (!user) {
    return Response.json({}, { status: 401 });
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return Response.json({}, { status: 401 });
  }

  return Response.json({
    name: user.name,
    email: user.email,
    image: user.image || null,
  });
}
