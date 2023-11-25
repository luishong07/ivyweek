import React from 'react'

export default function TaskItem(props) {
  return (
    <div className='task-item'>
        <div className={props.task.done ? "task-done": ""}>{props.task.taskInfo}</div>
        <div className='delete-btn'>X</div>
    </div>
  )
}
