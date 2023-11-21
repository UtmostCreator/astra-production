export async function GET({ params }) {
    // https://docs.astro.build/en/core-concepts/endpoints/#server-endpoints-api-routes
    return new Response(
        JSON.stringify({msg: "Test UtmostCreator Obj"}), {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        }
    );
}

export async function POST({ params }) {
    // https://docs.astro.build/en/core-concepts/endpoints/#server-endpoints-api-routes
    return new Response(
        JSON.stringify({msg: "Test UtmostCreator Obj"}), {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        }
    );
}