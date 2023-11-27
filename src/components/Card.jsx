import React, { useState } from "react";
import "../index.css";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";
// import { set } from "animejs";

export default function Card(props) {
    const [tasks, setTasks] = useState([]);
    const handleToggle = (id) => {
        console.log(typeof tasks[0].id , typeof id);

        let mapped = tasks.map((task) => {
            return task.id === parseInt(id) ? { ...task, done: !task.done } : { ...task };
        });
        setTasks(mapped)
    };

    const deleteTask =(id)=>{
        // console.log(id);
        let newTaskList = tasks.filter((task) =>{
            return task.id !== parseInt(id)
        })
        // console.log(newTaskList);
        setTasks(newTaskList)
    }
    return (
        <div className="card">
            <div className="day-header">{props.day}</div>
            <div className="content">
                {tasks.map((t) => {
                    return <TaskItem task={t} handleToggle={handleToggle} deleteTask={deleteTask}/>;
                })}
                {tasks.length < 6 ? (
                    <TaskForm tasks={tasks} setTasks={setTasks} />
                ) : null}
            </div>
        </div>
    );
}
