import { useState, useRef, useEffect } from "react";
// import anime from "animejs";
import anime from "animejs/lib/anime.es.js";

export default function AnimationBg() {

    
    useEffect(() => {
        const container = document.querySelector('.anim-container')
        for(let i = 0; i <8; i++){
            const blocks = document.createElement('div')
            // blocks.textContent = i
            blocks.classList.add('block')
            container.appendChild(blocks)
        }
       
        function animateBlock(){
            anime({
                targets: '.block',
                translateX: function(){
                    return anime.random(-innerWidth/2,innerWidth/2)
                },
                translateY: function(){
                    return anime.random(-innerHeight/2,innerHeight/2)
                },
                scale: function(){
                    return anime.random(1,1.5)
                },
                easing: 'linear',
                duration: 3000,
                // complete: animateBlock//this makes the background to continue the animations

            })
        }
        animateBlock()
    },[]);

    
    return (
        <div className="animation-bg" id="animation-bg">
            <div className="anim-container"><h2 className="center-title"></h2></div>
        </div>
    );
}
