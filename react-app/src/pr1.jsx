import { useState } from "react";
function Money(){
    const [money,setmoney] = useState(0);
    const rank = money >=7000?"ゴールド会員":money >= 3000?"シルバー会員":"一般会員";
    return(
        <div>
            <p>金額: {money}円 / ランク: {rank}</p>
        <button onClick={() => setmoney(money + 1000)}>1000円追加</button>
        </div>
    )

}