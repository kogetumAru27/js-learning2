import { useState,useEffect,useRef } from "react";
function Stargame(){
    const [stars,setStar] = useState([]);
    const [timer,setTimer] = useState(45);
    const [count,Setcount] = useState(0);
    const [gameover,SetGameover] = useState(false);
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        const pen = canvas.getContext("2d");
        canvas.style.background = "black";
        let newStar =[];
        //星のデータを作る関数
        function createStar(){
            for (let i = 0; i < 100; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                let vx,vy,type;
                const radius = Math.random() * 3 + 2;
                if(i % 3 === 0){
                    vx = Math.random() * 1 - 0.5;
                    vy = Math.random() * 1 - 0.5;
                    type = "slow";
                }else if(i % 3 === 1){
                    vx = Math.random() * 3 - 1;
                    vy = Math.random() * 3 - 1;
                    type = "normal";
                }else{
                    vx = Math.random() * 6 - 3;
                    vy = Math.random() * 6 - 3;
                    type = "fast";
                }
                newStar.push({
                    x:x,
                    y:y,
                    vx:vx,
                    vy:vy,
                    radius:radius,
                    type:type,
                });
                
            }
            setStar(newStar);
        }
        //星を描く関数
        function drawStar(){
            newStar.forEach(star => {
                pen.beginPath();
                pen.arc(star.x,star.y,star.radius,0,Math.PI * 2);
                pen.fillStyle = "white";
                pen.fill();
            });
        }
        //星を動かす関数
        function loop(){
            newStar.forEach(star => {
                star.x += star.vx;
                star.y += star.vy;
                if(star.x > canvas.width)star.x = 0;
                if(0 > star.x)star.x = canvas.width;
                if(star.y > canvas.height)star.y = 0;
                if(0 > star.y)star.y = canvas.height;
            });
            pen.clearRect(0,0,canvas.width,canvas.height);
            drawStar();
            requestAnimationFrame(loop);
        }
        //timerの関数
        function time(){
            const id = setInterval(() => {
                setTimer(tim => {
                    if(tim <= 0){
                    SetGameover(true);
                    clearInterval(id);
                    alert("ゲーム終了!score:" + count);
                    return 0;
                    }
                    return tim - 1;
                });
            },1000);
        }
        function isHit(star,clickX,clickY){
            const dx = star.x - clickX;
            const dy = star.y - clickY;
            return Math.sqrt((dx*dx) + (dy*dy)) <= star.radius + 10;
        }
        function ivent(e){
            if(gameover === true)return;
            let score = 0;
            let hit = false;
            const clickX = e.offsetX;
            const clickY = e.offsetY;
            newStar =     
                newStar.filter(star => {
                if(isHit(star,clickX,clickY)){
                    hit = true;
                    if(star.type === "fast")score += 10;
                    if(star.type === "normal")score += 5;
                    if(star.type === "slow")score += 2;
                    return false;
                }
                return true;
            });
            if(!hit)score -=2;
            newStar.push(createOnestar());
            setStar(newStar);
            pen.clearRect(0,0,canvas.width,canvas.height);
            drawStar();
            Setcount(co => co + score);
        }
        canvas.addEventListener("click",ivent);
        function createOnestar(){
                return {
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: Math.random() * 2 - 1,
                    vy: Math.random() * 2 - 1,
                    radius: Math.random() * 3 + 2,
                    type: ["fast","normal","slow"][Math.floor(Math.random() * 3)]
                }
        }        
        drawStar();
        createStar();
        loop();
        time();

    },[])
    return(
        <div>
            <canvas ref={canvasRef} width={800} height={500}></canvas>
            <p>time:{timer}</p>
            <p>score:{count}</p>
        </div>
    );
}
export default Stargame;