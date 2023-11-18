import React from "react";

export default function TaskForm() {
    return (
        <div>
            <input type="checkbox"  id="taskDone"/>
            <input type="text" id="taskInput"/>
            <button id="saveBtn">Save</button>
            {/* <button id="clearBtn">Clear</button> */}
        </div>
    );
}
