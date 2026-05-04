"use client";
import { createContext,useState,useContext, } from "react";
type Props = {
    count:number,
    text:string,
    setText:(t:string) => void,
    setCount:(c:number) => void,
}
const reserveText = createContext<Props | null>(null);
export function Prc({children}:{children:React.ReactNode}){
    const [text,setText] = useState("");
    const [count,setCount] = useState(0);
    return(
        <reserveText.Provider value={{count,text,setCount,setText}}>
            {children}
        </reserveText.Provider>
    )
}
export function PrcCHild(){
    const test = useContext(reserveText);
    if(!test)throw new Error("error");
    return test;
}
