import { useState, useRef, useEffect } from "react";
// import anime from "animejs";
import anime from "animejs/lib/anime.es.js";

export default function AnimationBg() {

    const ticks = Array.from(Array(8));

    const [playing, setPlaying] = useState(false);
    const animation = useRef(null);

    const handleClick = () => {
        playing ? animation.current.pause() : animation.current.play();
        setPlaying(!playing);
    };

    useEffect(() => {
        animation.current = anime.timeline({
            direction: "alternate",
            loop: true,
            autoplay: false,
            easing: "easeInOutSine",
        });

        for (const tick in ticks) {
            animation.current.add(
                {
                    targets: `.dots li:nth-child(${Number(tick) + 1})`,
                    translateX:  function(){return anime.random(-110, 110) },
                    translateY:  function(){return anime.random(-110, 110) },
                    rotate: function() { return anime.random(-180, 180); },
                    duration: function() { return anime.random(600, 2200); },
                },
                Math.random() * 600
            );
        }
    }, );

    // useEffect(() => {

    // }, []);

    return (
        <div className="animation-bg" id="animation-bg">
            <div className="player">
                <ul className="dots">
                    {ticks.map((_, i) => (
                        <li key={i} />
                    ))}
                </ul>
                <button className="playBtn" onClick={handleClick}>
                    {playing ? "Pause" : "Play"}
                </button>
            </div>
        </div>
    );
}
