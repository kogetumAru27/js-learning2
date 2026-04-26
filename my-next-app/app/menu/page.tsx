
import Link from "next/link";
const menus =[
    { id: 1, name: "月のケーキ", price: 800, description: "満月をイメージした白いケーキ" },
    { id: 2, name: "星のラテ", price: 600, description: "星屑をイメージしたラテアート" },
    { id: 3, name: "天の川パフェ", price: 1000, description: "夏の夜空をイメージしたパフェ" },
];
export default async function Cafe(){
    await new Promise(resolve => setTimeout(resolve, 2000));
    return(
        <div>
            <h1>天体カフェメニュー</h1>
            {menus.map(menu => (
                <div key={menu.id}>
                    <Link href={`/menu/${menu.id}`}>{menu.name}</Link>
                    <p>{menu.price}円</p>
                </div>
            ))}
        </div>

    )
}