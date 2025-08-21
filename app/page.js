import SearchBox from "@/components/SearchBox";
import Link from "next/link";


export default async function Home ({searchParams}) {
const params = await searchParams;
  const q = (params?.q || "").toLowerCase();
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=20",
    { cache: "no-store" } 
  ); 
  const posts = await res.json();

   const filtered = q
    ? posts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.body.toLowerCase().includes(q)
      )
    : posts;

    console.log(q ,params,posts, "dmvjsvnn")


    return(
      <div>
        <h1 className="text-2xl font-semibold mb-2">Mini Blog Explorer</h1>
      <p className="text-sm text-gray-600 mb-4">
        Browse posts from a free API. Click to view details. Try the search!
      </p>
       <SearchBox />
       <ul className="space-y-3">
        {filtered.map((post) => (
          <li key={post.id} className="rounded-2xl border bg-white p-4">
            <Link
              href={`/posts/${post.id}`}
              className="text-lg font-medium underline"
            >
              {post.title}
            </Link>
            <p className="text-gray-700 mt-1 line-clamp-2">{post.body}</p>
          </li>
        ))}
        {filtered.length === 0 && (
          <li className="text-gray-500">No results for “{q}”.</li>
        )}
      </ul>
      </div>
    )
}



