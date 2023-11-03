import { useState } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
    const date = new Date()
    console.log(date.getDay());

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
        "sun"
    ]
    return (
        <div className="container">
            {weekAndDays.map(day =>{
                return (
                    <Card key={day} day={day}/>
                )
            })}
        </div>
    );
}

export default App;
