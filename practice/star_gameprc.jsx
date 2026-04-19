import { useEffect,useState,useRef } from "react";
function Test(){
    const [stars,setStar] = useState([]);
    const [Timer,setTimer] = useState(45);
    const [count,setCount] = useState(0);
    const [gameover,setGameover] = useState(false);
    const refcanvas = useRef(null);
    useEffect(() => {
        const canvas = refcanvas.current;
        const pen = canvas.getContext("2d");
        canvas.style.background = "black";
        const newstars = [];
        function createStar(){
            for (let i = 0; i < 50; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                let vx,vy,type;
                const radius = Math.random() * 5 - 3;
                if(i % 3 ===0){
                    vx = Math.random() * 1 - 0.5;
                    vy = Math.random() * 1- 0.5;
                    type ="slow";
                }else if(i % 3 ===1){
                    vx = Math.random() * 3 - 1;
                    vy = Math.random() * 3 - 1;
                    type ="normal";
                }else{
                    vx = Math.random() * 6 - 3;
                    vy = Math.random() * 6 - 3;
                    type ="fast";
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
        }
        setStar(newstars);
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
                if(0 > star.x) star.x = canvas.width;
                if(star.y > canvas.height)star.y = 0;
                if(0 > star.y)star.y = canvas.height;
            });
            pen.clearRect(0,0,canvas.width,canvas.height);
            drawStar();
            requestAnimationFrame(loop)
        }
        function timer(){
            const id = setInterval(() => {
                setTimer(time => {
                    if(time <= 0){
                        setGameover(true)
                        clearInterval(id);
                        alert("終了!score:" + count);
                        return 0;
                    }
                    return time - 1;
                });
            },1000);
        }
    createStar();
    drawStar();
    loop();
    timer();
    },[]);
    return(
        <div>
            <h1>星ゲーム</h1>
            <canvas ref={refcanvas} width={800} height={500}></canvas>
            <p>count:{count}</p>
            <p>time:{Timer}</p>
        </div>
        
    )
}
