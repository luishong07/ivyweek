import React, { useState } from "react";
import "../index.css";
import TaskForm from "./TaskForm";

export default function Card(props) {
    const [tasks, setTasks] = useState([
        "groceries"
    ])
    return (
        <div className="card">
            {/* {props.day} */}
            <div className="day-header">{props.day}</div>
            <div className="content">
                {tasks.map((t)=>{
                    return <div>{t}</div>
                })}
                {/* <div>this</div>
                <div>this</div>
                <div>this</div>
                <div>this</div>
                <div>this</div>
                <div>this</div> */}

                {/* {
                   itemNumbers.map(number => {
                    return <TaskForm key={number}/>
                   })
                } */}
            </div>
        </div>
    );
}
