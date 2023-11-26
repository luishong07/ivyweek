import React from "react";

export default function TaskItem(props) {
	// const []

	const handleClick = (e)=>{
		// console.log(e.target);
		props.handleToggle(e.target.id)
	}
    return (
        <div className="task-item">
            <div 
				id={props.task.id}
				className={props.task.done ? "task-done" : "task"}
				onClick={handleClick}
			>
                {props.task.taskInfo}
            </div>
            <div className="delete-btn">X</div>
        </div>
    );
}
