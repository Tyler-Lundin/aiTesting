'use client';
import { useChat } from 'ai/react';
export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="bg-gray-200 h-screen text-black">
      {messages.map(m => (
        <div key={m.id}>
          {m.role}: {m.content}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>

  )
}
