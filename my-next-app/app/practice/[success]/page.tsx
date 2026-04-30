import Link from "next/link";
export default function Success(){
    return(
        <div>
            <h1>お問い合わせを送信しました.</h1>
            <Link href={`/practice`}>フォームに戻る</Link>
        </div>
    )
}