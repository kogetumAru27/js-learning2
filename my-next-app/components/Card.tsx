type Props = {
    name:string;
    age:number;
    count:number
}
export default function Card({name,age,count}:Props){
    //親で名前の指定
    return(
    <div>
        <p>{name}</p>
        <p>{age}</p>
        <p>{count}</p>
    </div>
    )
}