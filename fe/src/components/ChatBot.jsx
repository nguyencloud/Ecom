import React, { useState } from "react";
import "../css/ChatBot.css";

function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hello! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");

  const toggleChat = () => setOpen(!open);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    const botReply = generateReply(input);
    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text: botReply }]);
    }, 500);

    setInput("");
  };

  const generateReply = (msg) => {
    msg = msg.toLowerCase();
    if (msg.includes("order"))
      return "Please provide your order ID so we can check it for you.";
    if (msg.includes("warranty"))
      return "Our products come with a 30-day warranty for manufacturing defects.";
    if (msg.includes("payment"))
      return "We accept Cash on Delivery and Bank Transfer.";
    if (msg.includes("shipping"))
      return "Shipping takes 1–3 business days depending on your location.";
    if (msg.includes("return") || msg.includes("refund"))
      return "You can return products within 7 days if unused and in original condition.";
    return "Sorry, I didn't quite understand that. Could you please rephrase?";
  };

  return (
    <div className="chatbot-container">
      <div className="chat-toggle" onClick={toggleChat}>
        💬
      </div>

      {open && (
        <div className="chat-window">
          <div className="chat-header">Customer Support</div>
          <div className="chat-body">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-msg ${msg.from}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatBot;
