import React, { useState } from "react";
import "../index.css";
import TaskForm from "./TaskForm";
// import { set } from "animejs";

export default function Card(props) {
    const [tasks, setTasks] = useState([
        {task:"groceries", done: true}
        // "groceries",
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
                    return (
                        <div className="task-item">
                            <input type="checkbox" checked={t.done}/>
                            <div className={t.done?"task-done":""} key={t}>{t.task}</div>
                        </div>
                    );
                })}
                {tasks.length < 6 ? (
                    <TaskForm tasks={tasks} setTasks={setTasks} />
                ) : null}
            </div>
        </div>
    );
}
