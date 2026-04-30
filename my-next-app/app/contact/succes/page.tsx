import Link from "next/link";
export default function SuccessPage(){
    return(
        <div>
            <h1>送信が完了しました！</h1>
            <p>お問い合わせありがとうございました。</p>
            <Link href="/contact">入力フォームに戻る</Link>
        </div>
    )
}