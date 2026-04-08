import { useState } from "react";
function App(){
  const [count,setCounter] = useState(0);
  return(
    <div>
      <h1>カウンター</h1>
      <h2>{count}</h2>
      <button onClick={() => setCounter(count + 1)}>クリック</button>
    </div>
  );
}
export default App;
 