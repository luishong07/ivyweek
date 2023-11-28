import React, { useEffect, useState } from "react";
import "../index.css";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";
// import { set } from "animejs";

export default function Card(props) {
    const [tasks, setTasks] = useState([]);

    const handleFetchData = async () => {
        const res = await fetch("http://www.boredapi.com/api/activity/")
        const data = await res.json()
        console.log(data);
        let newTask = {
            taskInfo: data.activity,
            done: false,
            id: tasks.length +1
        }
        setTasks([...tasks, newTask])
    };

    useEffect(() => {
        console.log("use effect ran");
        handleFetchData()
    }, []);

    const handleToggle = (id) => {
        let mapped = tasks.map((task) => {
            return task.id === parseInt(id)
                ? { ...task, done: !task.done }
                : { ...task };
        });
        setTasks(mapped);
    };

    const deleteTask = (id) => {
        let newTaskList = tasks.filter((task) => {
            return task.id !== parseInt(id);
        });
        setTasks(newTaskList);
    };

    return (
        <div className="card">
            <div className="day-header">
                {props.day.day}
                {new Date().getDay() == props.day.id ? (
                    <div className="today"> (it's today!)</div>
                ) : (
                    ""
                )}
            </div>
            <div className="content">
                {tasks.map((t) => {
                    return (
                        <TaskItem
                            task={t}
                            handleToggle={handleToggle}
                            deleteTask={deleteTask}
                        />
                    );
                })}
                {tasks.length < 6 ? (
                    <TaskForm tasks={tasks} setTasks={setTasks} />
                ) : null}
            </div>
        </div>
    );
}
