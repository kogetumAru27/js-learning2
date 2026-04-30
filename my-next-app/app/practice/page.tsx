import { handolesubmit } from "./pr";
export default function Practice(){
    return(
        <div>
            <form action={handolesubmit}>
                <input type="text" name="name" placeholder="名前" />
                <button type="submit">送信</button>
                <input type="text" name="name" required />
            </form>

        </div>
    )
}