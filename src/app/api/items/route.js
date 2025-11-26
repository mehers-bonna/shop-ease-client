export async function GET() {
  try {
    const response = await fetch("https://shop-ease-server-pink.vercel.app/items");
    const data = await response.json();

    return Response.json(data);
  } catch (error) {
    return Response.json(
      { error: "Failed to load items" },
      { status: 500 }
    );
  }
}
