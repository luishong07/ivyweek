import React, { useEffect, useState } from "react";
import "../index.css";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";
import randomIcon from "../assets/randomIcon.svg";
import paperClip from "../assets/paperClip.svg";
import trashCan from "../assets/trashCan.svg";
import useLocalStorage from "../hooks/useLocalStorage";
import { v4 as uuidv4 } from "uuid";

export default function Card(props) {
    const [newLocalTask, setNewLocalTask] = useLocalStorage(props.day.day, []);
    const [tasks, setTasks] = useState(newLocalTask);
    const [wobble, setWobble] = useState(0);
    const [toss, setToss] = useState(0);
    const [shift, setShift] = useState(0);

    const handleFetchData = async () => {
        try {
            const res = await fetch("http://www.boredapi.com/api/activity/");
            const data = await res.json();
            let newTask = {
                taskInfo: data.activity,
                done: false,
                id: uuidv4(),
            };
            setTasks([...tasks, newTask]);
            setNewLocalTask([...tasks, newTask]);
        } catch (error) {
            // console.log(error);
        }
    };

    const handleToggle = (id) => {
        let mapped = tasks.map((task) => {
            return task.id === id ? { ...task, done: !task.done } : { ...task };
        });
        setTasks(mapped);
        setNewLocalTask(mapped);
    };

    const deleteTask = (id) => {
        let newTaskList = tasks.filter((task) => {
            return task.id !== id;
        });
        setTasks(newTaskList);
        setNewLocalTask(newTaskList);
    };

    const handleAddingRandomTask = () => {
        if (tasks.length >= 6) return;
        setWobble(1);
        handleFetchData();
    };

    const handleDeleteAllTasks = () => {
        if (!tasks.length) return;
        setTasks([]);
        setToss(1);
        setNewLocalTask([]);
    };

    return (
        <div className="card" 
            onMouseEnter={() => setShift(1)}
            onMouseLeave={() => setShift(0)}
            >
            <div className="day-header">
                <img
                    shift={shift}
                    className="clip-icon"
                    src={paperClip}
                    alt="icon"
                    onAnimationEnd={() => setShift(0)}
                />
                <img
                    onClick={handleAddingRandomTask}
                    wobble={wobble}
                    className="random-icon"
                    src={randomIcon}
                    alt="icon"
                    onAnimationEnd={() => setWobble(0)}
                />
                {props.day.day}
                <img
                    onClick={handleDeleteAllTasks}
                    className="trash-icon"
                    src={trashCan}
                    alt="trash-icon"
                    toss={toss}
                    onAnimationEnd={() => setToss(0)}
                />
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
                            key={t.id}
                            task={t}
                            handleToggle={handleToggle}
                            deleteTask={deleteTask}
                        />
                    );
                })}
                {tasks.length < 6 ? (
                    <TaskForm
                        day={props.day.day}
                        tasks={tasks}
                        setTasks={setTasks}
                        setNewLocalTask={setNewLocalTask}
                    />
                ) : null}
            </div>
        </div>
    );
}
