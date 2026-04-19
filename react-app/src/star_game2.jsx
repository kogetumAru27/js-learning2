import {useState,useRef,useEffect} from "react";
function Stargame(){
    const [stars,setStar] = useState([]);
    const [timer,setTimer] = useState(45);
    const [counter,setCount] = useState(0);
    const [gameover,setGameover] = useState(false);
    const Refcanvas = useRef(null);
    //canvas取得
    useEffect(() => {
        const canvas = Refcanvas.current;
        const pen = canvas.getContext("2d");
        canvas.style.background = "black"
        let newstars =[];
        function createStar(){
            for (let i = 0; i < 50; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                let vx,vy,type;
                const radius = Math.random() * 3 + 2;
                if(i % 3 === 0){
                    vx = Math.random() * 1 - 0.5;
                    vy = Math.random() * 1 - 0.5;
                    type = "slow"
                }else if(i % 3 === 1){
                    vx = Math.random() * 5 - 2;
                    vy = Math.random() * 5 - 2;
                    type = "normal";
                }else{
                    vx = Math.random() * 6 - 1;
                    vy = Math.random() * 6 - 1;
                    type = "fast"
                }
                newstars.push({
                    x:x,
                    y:y,
                    vx:vx,
                    vy:vy,
                    type:type,
                    radius:radius
                });
            }

        }
        setStar(newstars);
        function drawStar(){
            newstars.forEach(star => {
                pen.beginPath();
                pen.arc(star.x,star.y,star.radius,0,Math.PI * 2);
                pen.fillStyle = "white"
                pen.fill()
            });
        }
        
        function loop(){
            newstars.forEach(star => {
                star.x += star.vx;
                star.y += star.vy;
                if(star.x > canvas.width)return star.x = 0;
                if( 0 > star.x)return star.x = canvas.width;
                if(star.y > canvas.height)return star.y = 0;
                if(0 > star.y)return star.y = canvas.height;
            });
            pen.clearRect(0,0,canvas.width,canvas.height);
            drawStar();
            requestAnimationFrame(loop);
        }
        function timer(){
            const id = setInterval(() => {
                setTimer(time => {
                    if(time <= 0){
                        clearInterval(id)
                        setGameover(true);
                        alert("終了!score:" + counter);
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
    },[])
    return(
        <div>
             <canvas ref = {Refcanvas} width={800} height={500}></canvas>
             <p>score: {counter}</p>
             <p>time: {timer}</p>
             {gameover&&<p>ゲームオーバー</p>}
        </div>
       
    )
}
export default Stargame;