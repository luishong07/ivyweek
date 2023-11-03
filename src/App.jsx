import { useState } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {

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
