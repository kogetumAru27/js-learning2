import { useState,useEffect,useRef } from "react";
import Seasonbuttons from "./SeasonButtons";
import styles from "./Constellation.module.css";
const stars = [{
    name:"オリオン座",
    season: "冬",//実際は冬だが表示できるように通年に変えた
    description: "冬の代表的な星座で、三ツ星が一直線に並ぶのが特徴。",
    stars: [{x: 300, y:200,radius: 5,color:"orange"},{x:500 ,y:250,radius:3,color:"orange"},{x:400,y:400,radius:4,color:"orange"},{x:500,y:600,radius: 3,color:"orange"},{x:300,y:600,radius: 5,color:"blue"},{x:320,y:450,radius: 5,color:"blue"},{x:360,y:420,radius: 4,color:"white"}],
    lines: [{from:0,to:1},{from:1,to:2},{from:2,to:3},{from:3,to:4},{from:4,to:5},{from:5,to:6},{from:6,to:2},{from:5,to:0}]
},{
    name:"北斗七星",
    season: "春",
    description: "北斗七星は、おおぐま座の腰から尻尾にかけて並ぶ、2〜3等星の7つの星で構成された「柄杓（ひしゃく）」のような形の星列です",
    stars: [{x:200,y:250,radius: 5,color:"white"},{x:300,y:320,radius: 5,color:"white"},{x:400,y:380,radius: 5,color:"white"},{x:500,y:370,radius: 5,color:"white"},{x:530,y:440,radius: 5,color:"white"},{x:650,y:400,radius: 5,color:"white"},{x:610,y:315,radius: 5,color:"white"}],
    lines:[{from:0,to:1},{from:1,to:2},{from:2,to:3},{from:3,to:4},{from:4,to:5},{from:5,to:6}]
},
{
    name:"ふたご座",
    season: "冬",
    description: "双子座は、冬の夜空に1等星ポルックス（オレンジ色）と2等星カストル（白色）が並んで輝く、ギリシャ神話の兄弟に由来する星座。",
    stars:[{x:250,y:300,radius:5,color:"orange"}/*0*/,/*1*/{x:350,y:290,radius:5,color:"blue"},/*2*/{x:380,y:400,radius:5,color:"white"},/*3*/{x:500,y:390,radius:5,color:"white"},/*4*/{x:385,y:550,radius:5,color:"white"},/*5*/{x:480,y:780,radius:5,color:"white"},/*6*/{x:230,y:530,radius:5,color:"white"},/*7*/{x:150,y:550,radius:5,color:"white"},/*8*/{x:250,y:750,radius:5,color:"white"},/*9*/{x:185,y:770,radius:5,color:"white"}],
    lines:[{from:0,to:1},{from:1,to:2},{from:2,to:3},{from:2,to:4},{from:4,to:5},{from:0,to:6},{from:6,to:7},{from:6,to:8},{from:8,to:9},]
},
{
    name:"さそり座",
    season: "夏",//実際は夏
    description:"北半球では夏の大三角と共に夏の夜空の見どころとして親しまれている。全天に21個ある1等星[注 1]の1つ α星アンタレスを始め、数多くの明るく見える星が天の川の濃い領域を跨ぐようにS字型を描いて並んでおり、古代ギリシアの文献では「全天で最も明るい星座」と呼ばれていた",
    stars: [{x:490,y:160,radius:5,color:"orange"}/*0*/,/*1*/{x:540,y:260,radius:5,color:"blue"},/*2*/{x:620,y:370,radius:5,color:"blue"},/*3*/{x:390,y:310,radius:7,color:"red"},/*4*/{x:290,y:410,radius:5,color:"white"},/*5*/{x:250,y:620,radius:5,color:"white"},/*6*/{x:125,y:660,radius:5,color:"white"},/*7*/{x:120,y:540,radius:5,color:"white"},/*8*/{x:35,y:560,radius:5,color:"white"},],
    lines: [{from:0,to:1},{from:1,to:2},{from:1,to:3},{from:3,to:4},{from:4,to:5},{from:5,to:6},{from:6,to:7},{from:7,to:8},]

},
{
    name:"こと座", 
    season: "夏",//実際は夏
    description:"こと座は夏の大三角形の一角である青白く輝く１等星「ベガ（織姫）」が目印の小さな星座です。ベガの近くにある小さな平行四辺形の星の並びが特徴" ,
/*0*/   stars:[{x:670,y:195,radius:5,color:"white"},/*1*/{x:780,y:280,radius:8,color:"blue"},/*2*/{x:660,y:370,radius:5,color:"white"},/*3*/{x:590,y:620,radius:5,color:"white"},/*4*/{x:480,y:380,radius:5,color:"white"},/*2*/{x:410,y:620,radius:5,color:"white"},],
    lines: [{from:0,to:1},{from:1,to:2},{from:2,to:3},{from:2,to:4},{from:4,to:5},{from:3,to:5}]
}];
const getautoSeason = () => {
    const month = new Date().getMonth() + 1;
    if(month === 12 || month === 1 || month === 2)return"冬";
    if(month >= 3 && month <= 5)return"春";
    if(month >= 6 && month <= 8)return"夏";
    if(month >= 9 && month <= 11)return"秋";
    return"春"
}
function Constellation(){
    const [season,setSeason] = useState(getautoSeason());
    const [currentstar,SetcurrentStar] = useState(null);
    const [location,setLocation] = useState("");
    const [error,setError] = useState("");
    const [loading,setloading] = useState(false)
    const refcanvas = useRef(null);
    const refBackground = useRef([]);
    const filtered = stars.filter(star => star.season === season || star.season === "通年");
    useEffect(() => {
        const canvas = refcanvas.current;
        const pen = canvas.getContext("2d");
        const background = refBackground.current;
        canvas.style.background = "black";
        function createStar(){
            if (background.length > 0) return;
            for (let i = 0; i < 150; i++) {
                background.push({
                    x:Math.random() * canvas.width,
                    y:Math.random() * canvas.height,
                    radius:Math.random() * 2 + 1
                });  
            }
        }
        function drawStars(){
            background.forEach(star => {
                pen.beginPath();
                pen.arc(star.x,star.y,star.radius,0,Math.PI * 2);
                pen.fillStyle = "white";
                pen.fill();
            });
        }
        function getLocation(){
            return new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(
                    position => resolve(position),
                    error => reject(error)
                );
            });
        }
        async function Location() {
            setloading(true);
            try{
                const locationDate = await getLocation();
                const lat = locationDate.coords.latitude;
                const lng = locationDate.coords.longitude;
                const lo = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`);
                const result = await lo.json();
                setLocation(result.address?.city || result.address?.town || "現在地");
            }catch(error){
                console.log("失敗",error);
                setError("位置情報の取得に失敗しました。");
                
            }
            setloading(false);
        }
        createStar();
        drawStars();
        Location();
    },[]);
    useEffect(() => {
        const canvas = refcanvas.current;
        const pen = canvas.getContext("2d");
        const background = refBackground.current;
        canvas.style.background = "black";
        pen.clearRect(0,0,canvas.width,canvas.height);
        background.forEach(star => {
            pen.beginPath();
            pen.arc(star.x,star.y,star.radius,0,Math.PI * 2);
            pen.fillStyle = "white";
            pen.fill();
        });
        if(!currentstar)return;
        currentstar.stars.forEach(point => {
            pen.beginPath();
            pen.arc(point.x,point.y,point.radius,0,Math.PI * 2);
            pen.fillStyle = point.color;
            pen.fill();
        });
        currentstar.lines.forEach(line => {
            const p1 = currentstar.stars[line.from];
            const p2 = currentstar.stars[line.to];
            pen.beginPath();
            pen.moveTo(p1.x,p1.y);
            pen.lineTo(p2.x,p2.y);
            pen.strokeStyle = "yellow";
            pen.stroke();
        });      
    },[currentstar]);
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>星座アプリ</h1>
            <h2 className={styles.location}>{location} から見える星</h2>
            <h3>{loading?"読み込み中・・・":null}</h3>
            {error && !loading && <p style={{color:"red", fontWeight:"bold"}}>⚠️{error}</p>}
            <Seasonbuttons
            setSeason={setSeason}
            />
            {filtered.map(star => (
                <div key={star.name}>
                    <p className={styles.starname}>{star.name}</p>
                    {currentstar === star && <p className={styles.Description}>{star.description}</p>}
                    <button onClick={() => SetcurrentStar(star === currentstar?null:star)}>{currentstar === star?"閉じる":"特徴表示"}</button>
                </div>

            ))}
            <canvas className={styles.starcard} ref={refcanvas} width={1000} height={800}></canvas>
        </div>
    )
}
export default Constellation;