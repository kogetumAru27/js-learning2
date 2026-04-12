import { useState } from "react";
function Counter(){
    const [count,setCount] = useState(0);
    const [best,setBest] = useState(0);
    return(
        <div>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <h3>最高記録: {best}</h3>
            <button onClick={() => {
                const next = count + 1;
                setCount(next);
                setBest(next > best? next:best);
            }}>クリック</button>
            <button onClick={() => {
                setCount(count > 0? count -1:0);
            }}>マイナス</button>
            <button onClick={() => {
                setCount(0);
            }}>戻す</button>
        </div>
    );
}
export default Counter;