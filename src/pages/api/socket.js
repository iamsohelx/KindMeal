import { Server } from "socket.io";

export const config = {
  api: {
    bodyParser: false,
  },
};

let io; // Singleton instance to avoid reinitialization

export default function SocketHandler(req, res) {
  if (!io) {
    io = new Server(res.socket.server, {
      path: "/api/socket",
      addTrailingSlash: false,
    });

    res.socket.server.io = io;

    io.on("connection", (socket) => {
      console.log("Client connected:", socket.id);

      socket.on("message", (message) => {
        // Broadcast to all connected clients
        io.emit("message", message);
      });

      socket.on("disconnect", () => {
        console.log("Client disconnected:", socket.id);
      });
    });
  }

  res.end();
}
