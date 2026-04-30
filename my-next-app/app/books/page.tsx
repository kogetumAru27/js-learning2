import Link from "next/link";
import {books} from"../data/books"
export default function Bookhome(){
    return(
        <div>
            <h1>本の紹介</h1>
            {books.map(book => (
                <div key={book.id}>
                    <Link href={`/books/${book.id}`}>{book.title}</Link>
                </div>
            ))}
        </div>
    )

}