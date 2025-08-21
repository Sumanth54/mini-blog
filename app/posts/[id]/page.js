import LikeButton from "@/components/LikeButton";
import Link from "next/link";


export default async function PostPage({params}) {
    console.log("post")
    const {id} = params;
    const res  = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
    { cache: "no-store" }
    )
    if(!res.ok) {
        return <h1>Post not found </h1>
    }
     const post = await res.json();
   

    return ( 

      <article className="rounded-2xl border bg-white p-4 my-20">
      <h1 className="text-2xl font-semibold mb-2">{post.title}</h1>
      <p className="text-gray-800 mb-4">{post.body}</p>
      <div className="flex items-center gap-4">
        <LikeButton postId={id} />
        <Link href="/" className="underline">← Back to home</Link>
      </div>
    </article>


    )

}