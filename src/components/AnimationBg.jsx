import React, { useEffect, useRef } from "react";
import anime from "animejs";

export default function AnimationBg() {
    const animationRef = useRef(null);

    useEffect(() => {
        animationRef.current = anime({
            targets: ".el",
            // translateX: 1420,
            // // translateY: 500,
            // // delay: function (el, i) {
            // //     return i * 100;
            // // },
            // loop: true,
            // direction: "alternate",
            // easing: "easeInOutSine",
            keyframes: [
                {translateX: 1415},
                {translateY: 150},
                {translateX: 0},
                {translateY: 0}
              ],
              duration: 8000,
              easing: 'easeInOutSine',
              loop: true
        });
    }, []);

    return (
        <div className="animation-bg">
            <div className="el" />
        </div>
    );
}
