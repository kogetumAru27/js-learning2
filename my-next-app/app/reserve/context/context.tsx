"use client";
import { createContext, useContext, useState } from "react";
type Props ={
    count:number,
    text:string,
    setText:(t:string) => void,
    setCount:(c:number) => void,
    issubmit:boolean,
    setsubmit:(s:boolean) => void
}
const reserveText = createContext<Props|null>(null);
export function ReserveProvider({children}:{children:React.ReactNode}){
    const [text,setText] = useState("");
    const [count,setCount] =useState(0);
    const [issubmit, setsubmit] = useState(false);
    return(
        <reserveText.Provider value ={{count,text,issubmit,setsubmit,setCount,setText}} >
            {children}
        </reserveText.Provider>
    )
}
export function useReserve(){
    const context = useContext(reserveText);
    if(!context) throw new Error("ReserveProviderの外で使われています");
    return context;
}