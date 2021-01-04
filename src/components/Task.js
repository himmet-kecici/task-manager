import React, { useContext } from 'react'
import { TaskListContext } from '../context/TaskListContext'

const Task = ({ task }) => {
    const { removeTask, findItem } = useContext(TaskListContext)
    return (
        <li className="list-item">
            <button
                className="btn-delete task-btn"
                onClick={() => removeTask(task.id)}
            >
                <i className="fas fa-trash-alt"></i>
            </button>
            <span>{task.title} </span>


            <button className="btn-edit task-btn" onClick={() => findItem(task.id)}>
                <i className="fas fa-pen"></i>
            </button>

        </li>
    )
}

export default Task
