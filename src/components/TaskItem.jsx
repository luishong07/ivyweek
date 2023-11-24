import React from 'react'

export default function TaskItem(props) {
  return (
    <div className='task-item'>
        <div>{props.task}</div>
        <div className='delete-btn'>X</div>
    </div>
  )
}
