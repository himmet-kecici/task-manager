import React, { useContext, useState, useEffect } from 'react'
import { TaskListContext } from '../context/TaskListContext'

const TaskForm = () => {
    const { addTask, editItem, editTask } = useContext(TaskListContext)

    const [title, setTitle] = useState('')

    const handleChange = (e) => {
        setTitle(e.target.value)

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!editItem) {
            addTask(title)
            setTitle('')
        } else {
            editTask(title, editItem.id)
        }
    }

    useEffect(() => {
        if (editItem) {
            setTitle(editItem.title)
        } else {
            setTitle('')
        }

    }, [editItem])
    return (
        <form onSubmit={handleSubmit} className='form'>
            <input type='text' value={title} className='task-input' onChange={handleChange} placeholder='create a task' />

            <button type='submit' className='btn add-task-btn' >{editItem ? 'edit' : 'add'} </button>

        </form>
    )
}

export default TaskForm