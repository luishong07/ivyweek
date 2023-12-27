import React, { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
export default function TaskForm(props) {

    

    const [newTask, setNewTask] = useState("");
    const [localTask, setLocalTask] = useLocalStorage(props.day,'')
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
    }   
    return (
        <div className="task-form">
            <input
                onChange={e => setLocalTask(e.target.value)}
                // onChange={e => setNewTask(e.target.value)}
                value={localTask}
                type="text"
                id="taskInput"
            />
            <button onClick={handleAddNewTask} id="saveBtn">Save</button>
        </div>
    );
}
