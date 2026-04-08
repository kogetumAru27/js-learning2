import { useState } from "react";
function App(){
    const [count,setCounter] = useState(0);
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCounter(count + 1)}>クリック</button>
        </div>
    );
}
export default App;