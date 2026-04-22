import { useState,useRef,useEffect } from "react";
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
function Constellation(){
    const [season,setSeason] = useState("春");
    const [currentStar,setcurrentStar] = useState(null)
    const canvasRef = useRef(null);
    const filltered = stars.filter(star => star.season === season || star.season ==="通年");
    useEffect(() => {
        const canvas = canvasRef.current;
        const pen = canvas.getContext("2d");

    },[currentStar])
    useEffect(() => {
        const canvas = canvasRef.current
        const pen = canvas.getContext("2d");
        canvas.style.background ="black";
        let backgroundstars = [];
        function createbackgroundStar(){
            for (let i = 0; i < 150; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const radius = Math.random() * 2 + 1;
                backgroundstars.push({
                    x:x,
                    y:y,
                    radius:radius
                });
            }
        }
        function drawStar(){
            backgroundstars.forEach(star => {
                pen.beginPath();
                pen.arc(star.x,star.y,star.radius,0,Math.PI * 2);
                pen.fillStyle = "white"
                pen.fill();
            })
        }
        createbackgroundStar();
        drawStar();
    },[])
    return(
        <div>
            <h1>星座アプリ</h1>
            <canvas ref={canvasRef} width={800} height={500}></canvas>
            <button onClick={() => setSeason("春")}>春</button>
            <button onClick={() => setSeason("夏")}>夏</button>
            <button onClick={() => setSeason("秋")}>秋</button>
            <button onClick={() => setSeason("冬")}>冬</button>
            <button onClick={() => setSeason("通年")}>通年</button>
            {filltered.map(st => (
                <div key={st.name}>
                    <p>{st.name}</p>
                    <p>{st.description}</p>
                    <button onClick={() => setcurrentStar(st)}>特徴表示</button>
                </div>
            ))}
        </div>
    )
}
export default Constellation;