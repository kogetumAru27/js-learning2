import { useState,useEffect,useRef } from "react";
import GameStatus from "./GameStatus";
function Stargame(){
    const [stars,setStar] = useState([]);
    const [count,setCount] = useState(0);
    const [timer,setTimer] = useState(45);
    const [gameover,setGameover] = useState(false);
    const Refcanvas = useRef(null);
    useEffect(() => {
        const canvas = Refcanvas.current;
        const pen = canvas.getContext("2d");
        canvas.style.background = "black";
        let newstars = [];
        function createStar() {
            for (let i = 0; i < 150; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                let vx,vy,type;
                const radius = Math.random() * 3 + 2;
                if(i % 3 ===0){
                    vx = Math.random() * 1 - 0.5;
                    vy = Math.random() * 1 - 0.5;
                    type = "slow";
                }else if(i % 3 === 1){
                    vx = Math.random() * 3 - 1;
                    vy = Math.random() * 3 - 1;
                    type = "normal";
                }else{
                    vx = Math.random() * 5 - 3;
                    vy = Math.random() * 5 - 3;
                    type = "fast";
                }
                newstars.push({
                    x:x,
                    y:y,
                    vx:vx,
                    vy:vy,
                    radius:radius,
                    type:type
                });
            }
            setStar(newstars);
        }
        function drawStar(){
            newstars.forEach(star => {
                pen.beginPath();
                pen.arc(star.x,star.y,star.radius,0,Math.PI * 2);
                pen.fillStyle = "white";
                pen.fill();
            });
        }
        function loop(){
            newstars.forEach(star => {
                star.x += star.vx;
                star.y += star.vy;
                if(star.x > canvas.width)star.x = 0;
                if(star.x < 0) star.x = canvas.width;
                if(star.y > canvas.height)star.y = 0;
                if(star.y < 0) star.y = canvas.height;
            });
            pen.clearRect(0,0,canvas.width,canvas.height);
            drawStar();
            requestAnimationFrame(loop);
        }
        function time(){
            const id  = setInterval(() => {
                setTimer(t => {
                    if(t <= 0){
                        setGameover(true);
                        clearInterval(id);
                        alert("ゲーム終了!score: " + count);
                        return 0;
                    }
                    return t - 1
                })
            },1000)
        }
        function click(star,clickX,clickY){
            const dx = star.x - clickX;
            const dy = star.y - clickY;
            return Math.sqrt((dx*dx) + (dy*dy)) <= star.radius + 10;
        }
        function isHit(e){
            if(gameover === true)return;
            let score = 0;
            let hit = false;
            const clickX = e.offsetX;
            const clickY = e.offsetY;
            newstars =
            newstars.filter(star => {
                if(click(star,clickX,clickY)){
                    hit = true;
                    if(star.type === "fast")score += 10;
                    if(star.type === "normal")score += 5;
                    if(star.type === "slow")score += 2;
                    return false;
                }
                return true;
            });
            if(!hit)score -= 2;
            pen.clearRect(0,0,canvas.width,canvas.height);
            newstars.push(createnewStar());
            setStar(newstars)
            drawStar();
            setCount(co => co + score);
        }
        function createnewStar(){
            return{
                x:Math.random() * canvas.width,
                y:Math.random() * canvas.height,
                vx: Math.random() * 2 - 1,
                vy: Math.random() * 2 - 1,
                radius: Math.random() * 3 + 2,
                type:["fast","normal","slow"] [Math.floor(Math.random() * 3)]
            }
        }
        canvas.addEventListener("click",isHit);
        createStar();
        drawStar();
        loop();
        time();

    },[])
    return(
        <div>
            <h1>星のゲーム</h1>
            <canvas ref={Refcanvas} width={800} height={500}></canvas>
            <GameStatus
            timer = {timer}
            count = {count}
            />
        </div>
    )
}
export default Stargame;