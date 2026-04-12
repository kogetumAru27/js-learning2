import { useState } from "react";
import MemoItem from "./memoItem";
function Memo(){
    const [text,setText] = useState("");
    const [arr,setArry] =useState([]);
    const deleteMemo = (id) => {setArry(arr.filter(ar => (ar.id !== id)))}
    return(
        <div>
            <h1>Memoapp</h1>
            <input type="text"value={text} onChange={(e) => {
                setText(e.target.value);
            }} />
            <button onClick={() => {
                if(text.trim() === "")return;
                setArry([...arr,{id:Date.now(),text:text}]);
                setText("");
            }}>追加</button>
            {arr.map(item => (
                <MemoItem
                key = {item.id}
                item = {item}
                deleteMemo = {deleteMemo}
                />   
            ))}
            
        </div>
    );

}
export default Memo;