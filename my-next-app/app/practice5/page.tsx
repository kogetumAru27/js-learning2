"use client";
import TEst from "./prc"
type Date = {
    id:number,
    name:string
}
import { useState,useEffect } from "react";
export default function Prc(){
    const [users,setUsers] =useState<Date[]>([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(date => setUsers(date));
    },[]);
    return(
        <>
        <TEst/>
        {users.map(user => (
            <div key={user.id}>{user.name}</div>
        ))}
        </>
    )

}