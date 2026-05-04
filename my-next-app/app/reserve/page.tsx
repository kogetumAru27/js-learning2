"use client";
import { ReserveProvider} from './context/context';
import { useReserve } from './context/context';
function Comp(){
    const { count, text, setCount, setText } = useReserve()
    function pulas(){
        setCount(count + 1);
    }
    function mainas(){
        if(count <= 0)return;
        setCount(count - 1);
    }
    return(
        <>
        <button onClick={pulas}>+:{count}</button>
        <button onClick={mainas}>-:{count}</button>
        <input type="text"placeholder="名前" value={text} onChange={(e) => setText(e.target.value)} />
        </>
    );

}
function ReserveConfirm(){
    const { count, text} = useReserve()
    return(
        <>
        <h1>予約確認</h1>
        <p>{text}様{count}名でよろしですか</p>
        </>
    )

}
function Kidssubmit(){
    const {issubmit,setsubmit} = useReserve()
    function handlesubmit(){
        setsubmit(true);
    }
    return(
        <button onClick={handlesubmit}>{issubmit?"予約完了":"完了"}</button>
    );
}
export default function Main(){
    return(
        <ReserveProvider>
        <Comp />
        <ReserveConfirm />
        <Kidssubmit />
        </ReserveProvider>
    )
}