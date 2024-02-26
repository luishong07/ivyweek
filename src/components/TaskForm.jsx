import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
// import useLocalStorage from "../hooks/useLocalStorage";
export default function TaskForm(props) {

    const [newTask, setNewTask] = useState("");
    const handleAddNewTask = () =>{
        if(newTask === "") return
        // console.log(typeof uuidv4());
        const newObjTask = {
            // id: props.tasks.length + 1,
            id: uuidv4(),
            taskInfo: newTask,
            done: false
        }
        props.setTasks([...props.tasks,newObjTask])
        setNewTask("")
        props.setNewLocalTask([...props.tasks,newObjTask])
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
