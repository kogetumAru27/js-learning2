import {handle} from "./actions";
export default function Info(){
    return(
        <form action={handle}>
            <input type="text" name="name" placeholder="名前" required />
            <input type="text" name="mail" placeholder="メールアドレス" required />
            <input type="text" name="mess" placeholder="お問い合わせ" required />
        </form>
    )
}