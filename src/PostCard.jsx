import { useState } from "react";

function PostCard({ id, userId, title, body }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="p-4 rounded shadow transition-all duration-300 
    hover:scale-105 hover:border hover:border-red-300 
    hover:bg-pink-100 flex flex-col justify-between">
      
      <h2 className="font-bold mb-2">{title}</h2>
      
      <p className="text-sm text-gray-600 line-clamp-3">
        {body}
      </p>

      <button
        onClick={() => setClicked(true)}
        className={`mt-4 p-2 rounded transition hover:brightness-110 text-white ${
        clicked ? "bg-special-red2" : "bg-gray-400"
        }`}
      >
        {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>
    </div>
  );
}

export default PostCard;