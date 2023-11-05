import React from "react";
import "../index.css";
import TaskForm from "./TaskForm";

export default function Card(props) {
    const itemNumbers = [1,2,3,4,5,6]
    return (
        <div className="card">
            <div className="day-header">{props.day}</div>
            <div className="content">
                {
                   itemNumbers.map(number => {
                    return <TaskForm key={number}/>
                   })
                }
            </div>
        </div>
    );
}
