import React from "react";

export default function TaskItem(props) {
    // const []

    const handleClick = (e) => {
        // console.log(e.target);
        props.handleToggle(e.target.id);
    };
    const handleDelete = (e) => {
        props.deleteTask(e.target.id);
    };
    return (
        <div className="task-item">
            <div
                id={props.task.id}
                className={props.task.done ? "task-done" : "task"}
                onClick={handleClick}
            >
                {props.task.taskInfo}
                <span className="tooltiptext">{props.task.taskInfo}</span>
            </div>
            <div
                id={props.task.id}
                className="delete-btn"
                onClick={handleDelete}
            >
                X
            </div>
        </div>
    );
}
