import type { BunFile } from "bun";

const routes = {
    "/": () => {
        return new Response("Hello from Bun!", {
            headers: {
                "Content-Type": "text/plain",
            },
        });
    },
    "/json": () => {
        return new Response(JSON.stringify({ message: "Hello from Bun!" }), {
            headers: {
                "Content-Type": "application/json",
            },
        });
    },
}
const serveBun = Bun.serve({
    port: 3000,
    fetch(req) {
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
    },
})

console.log(`Server running at http://localhost:${serveBun.port}/`);