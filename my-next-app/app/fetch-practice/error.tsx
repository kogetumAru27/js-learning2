"use client";
export default function Error({error} :{error:Error}){
    return(
        <div>
            <h1>エラーが発生しました</h1>
            <p>{error.message}</p>
        </div>
    )
}