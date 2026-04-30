interface Post{
    userId: number;
  id: number;
  title: string;
  body: string;
}
import Link from "next/link";
export default async function Posts(){
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result:Post[] = await response.json();
    return(
        <div className="bg-gray-50 min-h-screen p-8">
            <h1>練習</h1>
            {result.map((post:Post) => (
                <div key={post.id} className="bg-white p-6 mb-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-500 group">
                    <Link href={`/posts/${post.id}`} className="text-gray-800 hover:text-blue-600 font-bold">{post.title}</Link>
                </div>

            ))}
        </div>
    );
}