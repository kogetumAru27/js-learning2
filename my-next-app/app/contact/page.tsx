import { handleSubmit } from "./actions"
export default function Contact(){
    return(
        <div>
            <p>入力フォーム</p>
        <form action={handleSubmit}>
            <input type="text" name="name" placeholder="名前を入力" />
            <button type="submit">送信</button>
        </form>
        </div>
    )
}
