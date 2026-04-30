import Link from "next/link";
export default async function Userpage(){
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const results = await response.json();
    console.log(results[0])
    return(
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">ユーザー一覧（外部APIから取得）</h1>
            
                {results.map((result: any) =>(
                 <li key={result.id} className="border-b py-2">
                 {/* リンクを追加！ */}
                 <Link href={`/users/${result.id}`} className="text-blue-600 hover:text-blue-800 font-medium">
                   {result.name}
                 </Link>
                 <span className="ml-4 text-gray-500">({result.email})</span>
               </li>
                ))}

        </div>
    )
}