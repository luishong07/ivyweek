import React, { useState } from "react";
import "../index.css";
import TaskForm from "./TaskForm";
// import { set } from "animejs";

export default function Card(props) {
    const [tasks, setTasks] = useState([
        "groceries",
        // "rock",
        // "stone",
        // "chalupas",
        // "tea",
        // "msg"
    ]);
    return (
        <div className="card">
            {/* {props.day} */}
            <div className="day-header">{props.day}</div>
            <div className="content">
                {tasks.map((t) => {
                    return <div key={t}>{t}</div>;
                })}

                {tasks.length < 6 ? <TaskForm tasks={tasks} setTasks={setTasks} /> : null}
            </div>
        </div>
    );
}
