"use client";
type User = {
    id: number;
    name: string;
}
import { useEffect,useState } from "react";
export default function UserList(){
    const [users,setusers] = useState<User[]>([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setusers(data))
    },[])
    return(
        <ul>
        {users.map(user => (
            <li key={user.id}>{user.name}</li>
        ))}
        </ul>
    )
}