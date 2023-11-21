import React, { useState } from "react";

export default function TaskForm(props) {
    const [newTask, setNewTask] = useState("");

    const handleAddNewTask = () =>{
        console.log('New Task');
        // console.log(props.tasks);
        props.setTasks([...props.tasks,newTask])
        setNewTask("")
    }   
    return (
        <div>
            {/* <input type="checkbox"  id="taskDone"/> */}
            <input
                onChange={e => setNewTask(e.target.value)}
                value={newTask}
                type="text"
                id="taskInput"
            />
            <button onClick={handleAddNewTask} id="saveBtn">Save</button>
            {/* <button id="clearBtn">Clear</button> */}
        </div>
    );
}
