import React, { useEffect, useState } from "react";
import "../index.css";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";
import randomIcon  from "../assets/randomIcon.svg"
import useLocalStorage from "../hooks/useLocalStorage";
export default function Card(props) {
    const [newLocalTask, setNewLocalTask] = useLocalStorage(props.day.day,[])
    // console.log(newLocalTask);
    const [tasks, setTasks] = useState(newLocalTask);
    const [wobble, setWobble] = useState(0)

    const handleFetchData = async () => {
        const res = await fetch("http://www.boredapi.com/api/activity/")
        const data = await res.json()
        let newTask = {
            taskInfo: data.activity,
            done: false,
            id: tasks.length +1
        }
        setTasks([...tasks, newTask])
        setNewLocalTask([...tasks, newTask])
    };


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
        setNewLocalTask(newTaskList)
    };

    

    const handleAddingRandomTask = ()=>{
        if(tasks.length >=6) return 
        setWobble(1)
        handleFetchData()
    }

    return (
        <div className="card">
            <div className="day-header">
                <img 
                    onClick={handleAddingRandomTask} 
                    wobble={wobble} 
                    className="random-icon" 
                    src={randomIcon} alt="icon"
                    onAnimationEnd={() => setWobble(0)}
                        
                    />
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
                    <TaskForm day={props.day.day} tasks={tasks} setTasks={setTasks} setNewLocalTask={setNewLocalTask}/>
                ) : null}
            </div>
        </div>
    );
}
