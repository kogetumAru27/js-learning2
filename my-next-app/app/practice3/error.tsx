"use client";
export default function Error({error,reset}:{error:Error,reset:() => void}){
    return(
        <div>
        <p>{error.message}</p>
        <button onClick={() => reset()}>再試行</button>
        </div>
    )
}