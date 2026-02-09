import { useState, useRef, useEffect } from "react";
import axios from "../api/axios";

export default function Chatbot() {

  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([
    {
      type: "bot",
      text: "👋 Hi! I'm CareConnect AI. How can I help you today?"
    }
  ]);

  const [typing, setTyping] = useState(false);

  const bottomRef = useRef(null);

  // Auto-scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  }, [chat, typing]);

  const send = async () => {

    if (!msg.trim()) return;

    const userMessage = msg;

    setChat(prev => [
      ...prev,
      { type: "user", text: userMessage }
    ]);

    setMsg("");
    setTyping(true);

    try {

      const res = await axios.post("/chatbot", {
        message: userMessage
      });

      setChat(prev => [
        ...prev,
        { type: "bot", text: res.data.reply }
      ]);

    } catch {
      setChat(prev => [
        ...prev,
        {
          type: "bot",
          text: "⚠️ AI is currently unavailable."
        }
      ]);
    }

    setTyping(false);
  };

  return (
    <>
      {/* Floating Button */}
      <div
        onClick={() => setOpen(!open)}
        className="
        fixed bottom-6 right-6
        w-16 h-16
        rounded-full
        bg-blue-600
        flex items-center justify-center
        text-white text-2xl
        shadow-2xl
        cursor-pointer
        hover:scale-110
        transition
        z-50
        "
      >
        💬
      </div>

      {/* Chat Window */}
      {open && (
        <div className="
          fixed bottom-24 right-6
          w-105 h-162.5
          bg-slate-900
          border border-slate-800
          rounded-3xl
          shadow-2xl
          flex flex-col
          overflow-hidden
          animate-in fade-in slide-in-from-bottom-5
          z-50
        ">

          {/* Header */}
          <div className="
            bg-slate-950
            p-4
            border-b border-slate-800
            font-semibold
            text-gray-200
            flex justify-between
          ">
            CareConnect AI

            <button
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="
            flex-1
            p-4
            overflow-y-auto
            space-y-3
          ">

            {chat.map((c, i) => (
              <div
                key={i}
                className={`
                  max-w-[75%]
                  px-4 py-2
                  rounded-2xl
                  text-sm
                  ${
                    c.type === "user"
                      ? "ml-auto bg-blue-600 text-white"
                      : "bg-slate-800 text-gray-200"
                  }
                `}
              >
                {c.text}
              </div>
            ))}

            {/* Typing Indicator */}
            {typing && (
              <div className="
                bg-slate-800
                px-4 py-2
                rounded-2xl
                w-fit
                text-gray-300
                text-sm
                animate-pulse
              ">
                CareConnect is typing...
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="
            border-t border-slate-800
            p-3
            flex gap-2
            bg-slate-950
          ">
            <input
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && send()
              }
              placeholder="Ask a health question..."
              className="
                flex-1
                bg-slate-800
                border border-slate-700
                rounded-xl
                px-3 py-2
                outline-none
                text-gray-200
                focus:border-blue-500
              "
            />

            <button
              onClick={send}
              className="
                bg-blue-600
                px-4
                rounded-xl
                hover:bg-blue-700
                transition
              "
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}
