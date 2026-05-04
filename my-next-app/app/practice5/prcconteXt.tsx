"use client";
import { useState,createContext,useContext } from "react";
interface Props {
    count:number,
    text:string,
    setCount:(c:number) => void,
    setText:(t:string) => void,
    users:test[],
    setUsers:(u:test[]) => void
}
type test = {
    id:number,
    name:string
}
const PracticeT = createContext<Props | null>(null)
export function ProviderPrc({children}:{children:React.ReactNode}){
    const [count,setCount] = useState(0);
    const [text,setText] = useState("");
    const [users,setUsers] = useState<test[]>([]);
    return(
        <PracticeT.Provider value={{count,setCount,text,setText,users,setUsers}}>
            {children}
        </PracticeT.Provider>
    );
} 
export function Get(){
    const Prc = useContext(PracticeT);
    if(!Prc)throw new Error("error");
    return Prc;
}