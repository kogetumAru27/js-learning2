import {books} from "../../data/books";
export default async function Bookdetail({params}:{params:Promise<{id:string}>}){
    const {id} = await params;
    const response = books.find(book => book.id === Number(id));
    if(!response)return <p>見つかりませんでした</p>
    return(
        <div>
            <span>{response.title}</span>
            <span>{response.author}</span>
        </div>
    );
}