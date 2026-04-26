import {stars} from "../data/stars";
import Link from "next/link";
export default function Stars(){
    return(
        <div>
            {stars.map(star => (
                <div key={star.id}>
                    <Link href= {`/stars/${star.id}`}>{star.name}</Link>
                </div>
            ))}
        </div>
    );
}