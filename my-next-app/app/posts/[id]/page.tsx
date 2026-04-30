interface Post{
    userId: number;
  id: number;
  title: string;
  body: string;
}
import Link from "next/link";
export default async function Postdetail({params}:{params:Promise<{id:string}>}){
    const {id} = await params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const result:Post = await response.json();
    return(
        <div>
            <h1><strong>{result.title}</strong></h1>
            <h2><strong>{result.body}</strong></h2>
            <Link href={`/posts`}>←一覧に戻る</Link>
        </div>
    )
}