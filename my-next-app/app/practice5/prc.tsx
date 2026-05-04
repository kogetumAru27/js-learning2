"use client";
import { useState } from "react";
export default function TEst(){
    const [colors,setColors] = useState("");
    function handleClick(){
        setColors(colors ===""?"赤":colors === "赤"?"青":colors === "青"?"緑":"赤");
    }
    return(
        <div>
            <button style={{backgroundColor: colors === "赤" ? "red" : colors === "青" ? "blue" : "green"}} onClick={handleClick}>btn</button>
        </div>
    )
}