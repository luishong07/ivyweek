import { useEffect, useRef, useState } from "react";
import Card from "./components/Card";
import "./App.css";
import anime from "animejs";

function App() {
    const date = new Date();

    //idea for background animation or progress
    //snake-like game that grows as tasks are completed; constellation-like drawing with p5
    const weekAndDays = [
        "week",
        "mon",
        "tue",
        "wed",
        "thur",
        "fri",
        "sat",
        "sun",
    ];
    const animationRef = useRef(null);
    useEffect(() => {
        animationRef.current = anime({
            targets: ".el",
            translateX: 550,
            delay: function (el, i) {
                return i * 100;
            },
            loop: true,
            direction: "alternate",
            easing: "easeInOutSine",
        });
    }, []);
    return (
        <div className="container">
            {weekAndDays.map(day =>{
                return (
                    <Card key={day} day={day}/>
                )
            })}
            <div className="el" />
        </div>
    );
}

export default App;
