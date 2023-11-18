import React, { useEffect, useRef } from "react";
import anime from "animejs";

export default function AnimationBg() {
    const animationRef = useRef(null);

    useEffect(() => {
        animationRef.current = anime({
            targets: ".el",
            translateX: 1410,
            // translateY: 500,
            // delay: function (el, i) {
            //     return i * 100;
            // },
            loop: true,
            direction: "alternate",
            easing: "easeInOutSine",
        });
    }, []);

    return (
        <div className="animation-bg">
            <div className="el" />
            {/* <svg class="small shape color-red" viewBox="0 0 100 25">
                <circle
                    cx="50%"
                    cy="50%"
                    r="5"
                    fill-rule="evenodd"
                    stroke-linecap="square"
                />
            </svg> */}
        </div>
    );
}
