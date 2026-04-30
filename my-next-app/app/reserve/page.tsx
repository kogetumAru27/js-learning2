"use client";
type Props ={
    count :number,
    text:string,
    setCount: (c: number) => void;
    setText: (t: string) => void;
}
type ConfirmProps = {
    count: number;
    text: string;
}
type Submit ={
    issubmit:boolean,
    setsubmit:(s:boolean) => void
}
import { useState } from "react";
function Comp({count,text,setCount,setText}:Props){
    function pulas(){
        setCount(count + 1);
    }
    function mainas(){
        if(count <= 0)return;
        setCount(count - 1);
    }
    return(
        <>
        <button onClick={pulas}>+:{count}</button>
        <button onClick={mainas}>-:{count}</button>
        <input type="text"placeholder="名前" value={text} onChange={(e) => setText(e.target.value)} />
        </>
    );

}
function ReserveConfirm({text,count,}:ConfirmProps){
    return(
        <>
        <h1>予約確認</h1>
        <p>{text}様{count}名でよろしですか</p>
        </>
    )

}
function Kidssubmit({issubmit,setsubmit}:Submit){
    function handlesubmit(){
        setsubmit(true);
    }
    return(
        <button onClick={handlesubmit}>{issubmit?"予約完了":"完了"}</button>
    );
}
export default function Main(){
    const [count,setCount] = useState(0);
    const [text,setText] =useState("");
    const [issubmit,setsubmit] = useState(false)
    return(
        <>
        <Comp count={count} text={text} setCount={setCount} setText={setText}/>
        <ReserveConfirm count={count} text={text}/>
        <Kidssubmit  issubmit={issubmit} setsubmit={setsubmit}/>
        </>
    )
}