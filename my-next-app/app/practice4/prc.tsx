"use client";
type Props = {
    name:string,
    id:number
}
import {useState,useEffect}from"react";
export default function Test(){
    const [users,setusers] = useState<Props[]>([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(re => re.json())
        .then(date => setusers(date));
    },[]);
    return(
        <>
        {users.map(user => (
            <div key={user.id}>{user.name}</div>
        ))}
        </>
    )
}