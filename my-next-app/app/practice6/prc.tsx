"use client";
import { useState } from "react";
function PRc(){
    const [text,setText] = useState("");
    return(
        <>
        <input type="text"value={text} onChange={(e) => setText(e.target.value)} />
        <p style={{color:text.length > 20?"red":"black"}}>{text.length > 20? "文字数オーバー":`文字数：${text.length}` }</p>
        </>
    )
}