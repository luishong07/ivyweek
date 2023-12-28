import React, { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
export default function TaskForm(props) {

    const [newTask, setNewTask] = useState("");
    const [newLocalTask, setNewLocalTask] = useLocalStorage(props.day,[])
    const handleAddNewTask = () =>{
        console.log('New Task');
        if(newTask === "") return
        const newObjTask = {
            id: props.tasks.length + 1,
            taskInfo: newTask,
            done: false
        }
        props.setTasks([...props.tasks,newObjTask])
        setNewTask("")
        setNewLocalTask([...props.tasks,newObjTask])
    }   
    return (
        <div className="task-form">
            <input
                onChange={e => setNewTask(e.target.value)}
                value={newTask}
                type="text"
                id="taskInput"
            />
            <button onClick={handleAddNewTask} id="saveBtn">Save</button>
        </div>
    );
}
