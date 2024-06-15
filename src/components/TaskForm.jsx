import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function TaskForm(props) {

    const [newTask, setNewTask] = useState("");
    const handleAddNewTask = () =>{
        if(newTask === "") return
        const newObjTask = {
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
