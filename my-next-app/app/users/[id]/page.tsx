import Link from "next/link";
export default async function Userdetailpage({params}:{params:Promise<{id:string}>}){
    const {id} = await params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const result = await response.json();
    return (
        <div className="p-8">
          <h1 className="text-3xl font-bold">{result.name} さんの詳細</h1>
          <div className="mt-6 p-6 border rounded-lg shadow-sm">
            <p><strong>📧 Email:</strong> {result.email}</p>
            <p><strong>📞 Phone:</strong> {result.phone}</p>
            <p><strong>🌐 Website:</strong> {result.website}</p>
            <p><strong>🏢 Company:</strong> {result.company.name}</p>
            <p><strong>📍 City:</strong> {result.address.city}</p>
          </div>
          <Link href={`/users`}> ← 一覧に戻る</Link>
        </div>
      );
    }
