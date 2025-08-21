"use client";
import { useState , useEffect } from "react";

export default function LikeButton( {postId}) {
    const [likes ,  setLikes] = useState(0)
    const [loading , setLoading] = useState(true)

    useEffect(() => {
        let ignore = false ;
        (async () => {
            const res = await fetch(`/api/likes?id=${postId}`)
            const data =  await res.json();
            if(!ignore) {
                setLikes(data.likes ?? 0);
                setLoading(false);
            }
        })()
        return () => {ignore = true}

    } , [postId])


    const like = async () => {
        const res    = await fetch("/api/likes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: String(postId) }),
    })
    const data = await res.json();
    setLikes(data.likes ?? 0);
    setLoading(false)
    }




    return (
        <button
      onClick={like}
      disabled={loading}
      className="rounded-xl border px-3 py-1 text-sm bg-white hover:bg-gray-50"
      aria-label={`Like post ${postId}`}
    >
      👍 Like {loading ? "…" : likes}
    </button>

    )
}