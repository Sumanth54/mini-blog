"use client";
import { useSearchParams ,useRouter} from "next/navigation";
import { useEffect , useState } from "react";

export default function SearchBox ()  {
    const router  =  useRouter() ;
    const params  = useSearchParams()
    const [q,  setQ] = useState(params.get("q" || ""))

    useEffect(() => {
        setQ(params.get("q") || "")
    }, [params])

    const onSubmit = (e) =>{
        e.preventDefault();
        const query =  q.trim()
        router.push(query ? `/?q=${encodeURIComponent(query)}` : "/")
    
    }


    return (
        <form onSubmit={onSubmit} className="mb-4 flex gap-2">
            <input 
                value={q ?? ""}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search Post..."
                className="flex-1 round-xl border px-3 py-2"
            />
            <button
            type="submit"
            className="rounded-xl border px-4 py-2 bg-white hover:bg-gray-50"
            >
                Search
            </button>
        </form>
    )










}