"use client";

import { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";

export default function ChatPage() {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [username, setUsername] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const randomUser = `User_${Math.floor(Math.random() * 1000)}`;
    setUsername(randomUser);

    fetch("/api/socket")
      .then(() => {
        const socketInstance = io({
          path: "/api/socket",
          addTrailingSlash: false,
        });

        socketInstance.on("connect", () => {
          setIsConnected(true);
          console.log("Connected to Socket.IO server");
        });

        socketInstance.on("disconnect", () => {
          setIsConnected(false);
          console.log("Disconnected from Socket.IO server");
        });

        socketInstance.on("message", (message) => {          
          setMessages((prevMessages) => [...prevMessages, message]);          
        });

        setSocket(socketInstance);

        return () => {
          socketInstance.disconnect();
        };
      })
      .catch((err) => {
        console.error("Failed to initialize Socket.IO server:", err);
      });
  }, []);


  const sendMessage = (e) => {
    e.preventDefault();

    if (socket) {
      const newMessage = {
        id: Date.now().toString(),
        text: messageInput,
        user: username,
        timestamp: new Date(),
      };

      socket.emit("message", newMessage);
      setMessageInput("");
    }
  };

  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getInitials = (name) => {
    return name.substring(0, 2).toUpperCase();
  };

  return (
    <div className="flex flex-col h-screen max-w-3xl mx-auto p-4">
      <header className="bg-blue-600 text-white p-4 rounded mb-4 flex justify-between items-center">
        <h1 className="text-lg font-bold">Next.js Chat App</h1>
        <div className="flex items-center space-x-2">
          <span className="text-sm">
            {isConnected ? "Connected" : "Disconnected"}
          </span>
          <div
            className={`w-3 h-3 rounded-full ${
              isConnected ? "bg-green-500" : "bg-red-500"
            }`}
          />
        </div>
      </header>

      <div className="flex-1 overflow-y-auto bg-gray-100 p-4 rounded mb-4">
        <ul className="space-y-4">
          {messages.map((msg) => (
            <li
              key={msg.id}
              className={`flex ${
                msg.user === username ? "justify-end" : "justify-start"
              }`}
            >
              <div className="flex items-start space-x-2 max-w-[70%]">
                {msg.user !== username && (
                  <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    {getInitials(msg.user)}
                  </div>
                )}
                <div>
                  <div
                    className={`p-3 rounded-lg text-sm ${
                      msg.user === username
                        ? "bg-blue-100 text-blue-900"
                        : "bg-white text-gray-800"
                    }`}
                  >
                    {msg.text}
                  </div>
                  <div
                    className={`text-xs text-gray-500 mt-1 ${
                      msg.user === username ? "text-right" : "text-left"
                    }`}
                  >
                    {msg.user} • {formatTime(msg.timestamp)}
                  </div>
                </div>
                {msg.user === username && (
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    {getInitials(msg.user)}
                  </div>
                )}
              </div>
            </li>
          ))}
          <div ref={messagesEndRef} />
        </ul>
      </div>

      <form
        onSubmit={sendMessage}
        className="flex space-x-2 bg-white p-2 rounded shadow"
      >
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Type a message"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
        />
        <button
          type="submit"
          disabled={!isConnected || !messageInput.trim()}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          Send
        </button>
      </form>
    </div>
  );
}
