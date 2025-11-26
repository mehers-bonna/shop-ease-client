import bcrypt from "bcryptjs";

export async function POST(req) {
  const { name, email, password } = await req.json();

  // hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // save user in DB
  const user = {
    name,
    email,
    password: hashedPassword,
  };

  // store in a temporary array 
  global.users = global.users || [];
  global.users.push(user);

  return Response.json({
    success: true,
    message: "User registered successfully!",
  });
}
