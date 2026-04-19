import { useState,useRef ,useEffect} from "react";
function Stargame(){
    const [stars,setStar] = useState([]);
    const [gameover,setGameover] =useState(false);
    const [count,setCount] = useState(0);
    const [timer,setTimer] = useState(45);
    const canvasRef = useRef(null); 
    useEffect(() => {//canvasを取得して操作するため
        const canvas = canvasRef.current;
        const pen = canvas.getContext("2d");
        pen.fillStyle = "black";
        pen.fillRect(0,0,canvas.width,canvas.height);
        const newStars = [];
        for (let i = 0; i < 50; i++) {
            newStars.push({
             x: Math.random() * canvas.width,
             y:Math.random() * canvas.height,
             vx: Math.random() * 2 - 0.5,
             vy: Math.random() * 3 - 0.5, 
            })}
            setStar(newStars);
        
    },[])
    return(
        <div>
            <h1>starGame</h1>
            <canvas ref={canvasRef} width={800} height={500}></canvas>
        </div>

    )      
    }

