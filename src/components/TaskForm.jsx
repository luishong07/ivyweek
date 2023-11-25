import React, { useState } from "react";

export default function TaskForm(props) {
    const [newTask, setNewTask] = useState("");

    const handleAddNewTask = () =>{
        console.log('New Task');
        // console.log(props.tasks);
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
