import React, { useState } from "react";
import giminilogo from "../assets/gimini/giminilogo.png";
import { IoMdSend } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { RiImageAddLine } from "react-icons/ri";


const SkeletonLine = ({ width = "100%" }) => (
  <div
    className="h-4 rounded mb-2 animate-pulse"
    style={{
      width,
      background: "linear-gradient(90deg, #ffefef, #fff8e1, #e8f5e9, #e3f2fd, #f3e5f5)",
      backgroundSize: "200% 100%",
      animation: "pulseRainbow 1.5s ease-in-out infinite",
    }}
  ></div>
);


const style = document.createElement("style");
style.innerHTML = `
  @keyframes pulseRainbow {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
`;
document.head.appendChild(style);


const API_KEY = "AIzaSyAeXKSf8cMxsYwCaNqc6IQXY_fiZblZ7tE";

export default function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault(); 

    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                role: "user",
                parts: [{ text: input }]
              }
            ]
          })
        }
      );

      const data = await res.json();
      const botReply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
      setMessages((prev) => [...prev, { role: "model", content: botReply }]);
    } catch (err) {
      console.error("API error:", err);
      setMessages((prev) => [...prev, { role: "model", content: "Error getting response" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="absolute left-1/2 bottom-10 transform -translate-x-1/2 w-[700px]">
      
      {/* Chat Area */}
      <div className="h-[540px] overflow-y-auto p-3 border-gray-300 rounded mb-2">
      {messages.length === 0 ? (
  <div className="h-[540px] flex items-center justify-center mb-2">
    <h1 className="text-3xl font-medium  text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 animate-fade-in">
      Hello, Hariharan
    </h1>
  </div>
) : (
  <>
    {messages.map((msg, i) => (
      <div key={i} className={`mb-4 flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
        <div className={`max-w-[70%] p-3 rounded-xl ${msg.role === "user" ? "bg-[#e9edf5] px-4 py-2 rounded-[20px] rounded-tr-[2px] inline-block" : ""}`}>
          <p className="mb-1 flex items-center gap-1">
            {msg.role === "user" ? "" : (
              <>
                <img src={giminilogo} className="w-[18px] h-[18px] inline-block" />
                Gemini
              </>
            )}
          </p>
          <p className="text-[17px] font-light whitespace-pre-line">{msg.content}</p>
        </div>
      </div>
    ))}
  </>
)}
        
        {isLoading && (
          <div className="mb-4 flex justify-start">
            <div className="max-w-[70%] p-3">
              <p className="mb-1 flex items-center gap-1">
                <img src={giminilogo} className="w-[18px] h-[18px] inline-block" />
                Gemini
              </p>
              <div>
                <SkeletonLine width="95%" />
                <SkeletonLine width="80%" />
                <SkeletonLine width="70%" />
              </div>
            </div>
          </div>
        )}
      </div>

    
      <form onSubmit={handleSend}>
        <div className="flex border border-gray-400 rounded-2xl px-2 py-7 pb-12 relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Gemini.."
            className="flex-1 outline-none px-2 pb-5"
          />
          <button type="submit" className="text-xl text-black-600 me-3">
            <IoMdSend />
          </button>
          <div className="text-xl absolute bottom-5 left-3 text-gray-500">
            <FaPlus />
          </div>
          <div className="text-xl absolute bottom-5 left-12 text-gray-500">
            <RiImageAddLine />
          </div>
        </div>
      </form>
    </div>
  );
}
