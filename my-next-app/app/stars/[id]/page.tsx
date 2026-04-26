import {stars} from "../../data/stars";
export default async function Stardetail({params}:{params:Promise<{id:string}>}) {
    const {id} = await params;
    const star = stars.find(star => star.id === Number(id));
    if(!star)return <p>見つかりませんでした</p>
    return(
        <div key={star.id}>
            <p>{star.name}</p>
            <p>{star.magnitude}</p>
        </div>
    )
}