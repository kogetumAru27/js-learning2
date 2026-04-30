"use client";
import { useState } from "react";

function WriteText(){
    const [text,setText] = useState("");
    return(
        <>
        <input type="text"value={text} onChange={(e) => setText(e.target.value)} />
        {text}
        </>
    );
}
export default function Comp(){
    return(
        <>
        <WriteText/>
        </>
    )
}