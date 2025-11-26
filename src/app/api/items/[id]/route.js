export async function GET(req, context) {
    const id = context.params.id;

    console.log("API Route Received ID:", id);

    const backendURL = `https://shop-ease-server-pink.vercel.app/items/${id}`;

    try {
        const response = await fetch(backendURL, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });

        const data = await response.json();

        return new Response(JSON.stringify(data), {
            status: response.status,
            headers: { "Content-Type": "application/json" }
        });

    } catch (err) {
        return new Response(
            JSON.stringify({ error: "Failed to fetch item" }),
            { status: 500 }
        );
    }
}
