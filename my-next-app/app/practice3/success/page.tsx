import Link from "next/link";
export default function Success(){
    return(
        <div>
            <p>お問い合わせが完了しました。</p>
            <Link href={`/practice3`}>ホームに戻る</Link>
        </div>
    )
}