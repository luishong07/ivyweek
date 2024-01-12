import { useState, useRef, useEffect } from "react";
// import anime from "animejs";
import anime from "animejs/lib/anime.es.js";

export default function AnimationBg() {


    const [playing, setPlaying] = useState(false);
    const animation = useRef(null);

    
    useEffect(() => {
        const container = document.querySelector('.anim-container')
        for(let i = 0; i <= 48; i++){
            const blocks = document.createElement('div')
            blocks.classList.add('block')
            container.appendChild(blocks)
        }
       
        function animateBlock(){
            anime({
                targets: '.block',
                translateX: function(){
                    return anime.random(-400,400)
                },
                translateY: function(){
                    return anime.random(-400,400)
                },
                scale: function(){
                    return anime.random(1,1.5)
                },
                easing: 'linear',
                duration: 3000,
                delay: anime.stagger(10),
                complete: animateBlock
            })
        }
        animateBlock()
    });

    
    return (
        <div className="animation-bg" id="animation-bg">
            <div className="anim-container"><h2 className="center-title">Hello there</h2></div>
        </div>
    );
}
