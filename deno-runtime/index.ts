console.log("Server running at http://localhost:3000/");

import { serve } from "https://deno.land/std@0.177.0/http/server.ts"; // IGNORE THIS ERROR, IT WORKS JUST FINE

const routes = {
    "/": () => {
        return new Response("Hello from Deno!", {
            headers: {
                "Content-Type": "text/plain",
            },
        });
    },
    "/json": () => {
        return new Response(JSON.stringify({ message: "Hello from Deno!" }), {
            headers: {
                "Content-Type": "application/json",
            },
        });
    },
};

serve(async (req) => {
    const url = new URL(req.url);
    const route = routes[url.pathname];
    if (route) {
        return route();
    } else {
        return new Response("Not Found", {
            status: 404,
            headers: {
                "Content-Type": "text/plain",
            },
        });
    }
}
, { port: 3000 });



