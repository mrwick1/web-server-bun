import { serve } from "bun";

serve({
  fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/") {
      return new Response("Hello from bun", { status: 200 });
    } else if (url.pathname === "/login") {
      return new Response("logged in ", { status: 200 });
    } else {
      return new Response("404: not found ", { status: 404 });
    }
  },
  port: 3000,
  hostname: "localhost",
});
