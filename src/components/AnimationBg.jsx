import { useState, useRef, useEffect } from "react";
// import anime from "animejs";
import anime from "animejs/lib/anime.es.js";

export default function AnimationBg() {


    const [playing, setPlaying] = useState(false);
    const animation = useRef(null);

    

    useEffect(() => {
       

       
    });

    
    return (
        <div className="animation-bg" id="animation-bg">
            
        </div>
    );
}
