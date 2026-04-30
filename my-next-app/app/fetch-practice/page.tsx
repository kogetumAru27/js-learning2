interface User{
    id: number, 
    name: string, 
    email: string
}
import Link from "next/link";
export default async function Practice(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if(!response.ok)throw new Error("データの取得に失敗しました。");
    const result = await response.json();
    
    return(
        <div>
            <h1>ユーザー一覧</h1>
            {result.map((re:User) => (
                <div key={re.id}>
                    <Link href={`/fetch-practice/${re.id}`}>{re.name}</Link>
                    <p>{re.email}</p>
                </div>
            ))}
        </div>
    )
}