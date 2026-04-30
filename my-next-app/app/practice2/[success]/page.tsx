import Link from "next/link";
export default function Success(){
    return(
        <div>
            <h1>お問い合わせ完了しました</h1>
            <Link href={`/practice2`}>ホームへ戻る</Link>
        </div>
    )
}