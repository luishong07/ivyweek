import { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

export default function AnimationBg() {
    useEffect(() => {
        const container = document.querySelector(".anim-container");
        for (let i = 0; i < 8; i++) {
            const blocks = document.createElement("div");
            // blocks.textContent = `${i}`;
            const text = document.createElement("p")
            text.textContent = "Hello there"
            blocks.classList.add("block");
            blocks.classList.add("blue");
            // blocks.appendChild(text)
            container.appendChild(blocks);
        }

        function animateBlock() {
            anime({
                targets: ".block",
                translateX: function () {
                    const xCoordinate = anime.random(
                        (0.65 * innerWidth) / 2,
                        (0.9 * innerWidth) / 2
                    );
                    const sign = Math.floor(Math.random() * 2);
                    const newTranslateX = sign ? xCoordinate : -1 * xCoordinate;
                    return newTranslateX;
                    // return anime.random(-innerWidth/2,innerWidth/2)*0.6
                },
                translateY: function () {
                    return (
                        anime.random(-innerHeight / 2, innerHeight / 2) * 0.8
                    );
                },
                scale: function () {
                    return anime.random(1, 1.2);
                },
                easing: "spring(1, 40, 10, 0)",
                // easing: 'cubicBezier(.5, .05, .1, .3)',
                // easing: 'linear',
                duration: 3000,
                delay: 1000,
                complete: animateBlock, //this makes the background to continue the animations
            });
        }
        animateBlock();
    }, []);

    return (
        <div className="animation-bg" id="animation-bg">
            <div className="anim-container">
                <h2 className="center-title"></h2>
            </div>
        </div>
    );
}
