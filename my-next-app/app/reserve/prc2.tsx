"use client"
import { useState } from "react";
type Item = {
    id: number;
    text: string;
}
type Props = {
    text: string;
    setText: (t: string) => void;
    arry: Item[];
    setArry: (a: Item[]) => void;
}
function Child({text,setText,setArry,arry}:Props){
    return(
        <>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
        <button onClick={() => setArry([...arry,{id:Date.now(),text:text}])}>追加</button>
        </>
    )

}
export default function Main(){
    const [arry,setArry] =useState<Item[]>([]);
    const [text,setText] =useState("");
    return(
        <>
        <Child text={text} setText={setText} setArry={setArry} arry={arry}/>
        {arry.map(a => (
            <div key={a.id}>{a.text}</div>
        ))}
        </>
    )

}