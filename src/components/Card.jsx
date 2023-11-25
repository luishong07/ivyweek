import React, { useState } from "react";
import "../index.css";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";
// import { set } from "animejs";

export default function Card(props) {
    const [tasks, setTasks] = useState([
        
    ]);
    return (
        <div className="card">
            <div className="day-header">{props.day}</div>
            <div className="content">
                {tasks.map((t) => {
                    return <TaskItem task={t}/>
                    
                })}
                {tasks.length < 6 ? (
                    <TaskForm tasks={tasks} setTasks={setTasks} />
                ) : null}
            </div>
        </div>
    );
}
