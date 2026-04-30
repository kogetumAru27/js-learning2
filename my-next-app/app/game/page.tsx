"use client"
import { useState } from "react";
function Square(){
    const [label, setLabel] = useState<string | null>(null);
    function handleClick() {
        setLabel("X")
      }
    return(
        <>
         <button style={{border:"1px solid black", padding:"10px"}} className="square" onClick={handleClick}>{label}</button>
        </>
    )
}
export default function Board(){
    return (
        <>
    <div className="board_row">
        <Square />
        <Square />
        <Square />
    </div>
    <div className="board_middle">
        <Square />
        <Square />
        <Square />
    </div>
    <div className="board_high">
        <Square />
        <Square />
        <Square />
    </div>
    </>
    
)
}