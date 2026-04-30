"use client"
import { useState,useEffect } from "react"

function Counter(){
    const [count,setCount] = useState(0);
    function handlecount(){
        setCount(prev => prev +1);
    }
    function mainas(){
        if(count <= 0)return
        setCount(prev => prev -1);
    }
    useEffect(() => {
        console.log("カウントが変わったので、タイトルを更新しました");
      }, [count]); // count が変わった時だけ実行される！
    return (
    <>
    <button onClick={handlecount}>＋ 増やす ({count})</button>
    <button onClick={mainas}>－ 減らす ({count})</button>
    </>
)

}
export default function Count(){
    return(
        <Counter/>
    )
}