import { useState } from "react";
function Practice(){
    const [text,setText] = useState("");
    const [arr,setarr]= useState([]);
    const filterde = (id) => setarr(arr.filter(a => a.id !== id));
    const complete = (id) => setarr(arr.map(a => a.id === id?{...a,done:!a.done}:a));
    return(
        <div>
            <input type="text"value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={() => {
                if(text.trim() === "")return;
                setarr([...arr,{id:Date.now(),text:text,done:false}])
                }}>追加</button>
            {arr.map(ar => (
                <div key={ar.id}>
                    <span style={{textDecoration: ar.done ? "line-through" : "none"}}>{ar.text}</span>
                    <button onClick={() => complete(ar.id)}>完了</button>
                    <button onClick={() => filterde(ar.id)}>削除</button>
                </div>
            ))}
        </div>
    )
}