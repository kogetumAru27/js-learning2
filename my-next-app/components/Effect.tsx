import { useEffect } from "react";
export default function Effect(){
    useEffect(() => {
        console.log("表示されました")
    },[]);
 return(
    <>エフェクトテスト</>
 )
}