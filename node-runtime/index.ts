const http = require('http');
const url = require('url');

const routes = {
    "/": () => {
        return {
            status: 200,
            headers: { "Content-Type": "text/plain" },
            body: "Hello from Node.js!"
        };
    },
    "/json": () => {
        return {
            status: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: "Hello from Node.js!" })
        };
    },
}

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const route = routes[parsedUrl.pathname];
    if (route) {
        const { status, headers, body } = route();
        res.writeHead(status || 200, headers);
        res.end(body);
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not Found");
    }
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
