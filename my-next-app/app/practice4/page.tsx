"use client";
import { useState } from "react";
type Props ={
    select:string,
    setselect:(s:string) => void
}
function Child({select,setselect}:Props){
    return(
        <>
        <select onChange={(e) =>setselect(e.target.value)}>
            <option value="月光ブレンド">月光ブレンド</option>
            <option value="流星ソーダ">流星ソーダ</option>
            <option value="銀河ケーキ">銀河ケーキ</option>
        </select>
        <p>{select}を選択中</p>
        </>
        
    )
}
export default function Main(){
    const [select,setselect] =useState("");
    return(
        <>
        <Child select={select} setselect={setselect}/>
        <p>{select}</p>
        </>
    )
}

