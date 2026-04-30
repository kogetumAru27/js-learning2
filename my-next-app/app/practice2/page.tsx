import {handle}from"./actions"
export default function Home(){
    return(
        <form action={handle}>
            <input type="text" name="name" placeholder="名前" />
            <input type="text" name="mail" placeholder="メール" />
            <input type="text" name="message" placeholder="問い合わせ内容" />
            <button type="submit">送信</button>
        </form>
    )
}