interface User{
    id: number, 
    name: string, 
    email: string
}
import Link from "next/link";
export default async function Practicedetail({params}:{params:Promise<{id:string}>}){
    const {id} = await params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const result:User = await response.json();
    console.log(result);
    return(
        <div>
            <h1>{result.name}</h1>
            <p><strong>{result.email}</strong></p>
            <Link href={`/fetch-practice`}>一覧へ戻る</Link>
        </div>
    )
}