type Menu ={
    title:string,
    price:number
}
function MenuItem({title,price}:Menu){
    return(
        <p>本日のメニュー{title}-{price}</p>
    );
}
export default function Main(){
    const menu = [
    {  title: "月光ブレンド", price: 500 },
    {  title: "流星ソーダ", price: 650 },
    {  title: "銀河ケーキ", price: 800 },
];
return(
    <>
    {menu.map(me => (
        <MenuItem key={me.title} title={me.title} price={me.price}/>
    ))}
    </>

)
}
