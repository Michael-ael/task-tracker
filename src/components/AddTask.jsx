import React from 'react'
import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, settext] = useState('')
    const [day, setday] = useState('')
    const [reminder, setreminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add Task')
            return
        }

        onAdd({ text, day, reminder })

        settext('')
        setday('')
        setreminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className="form-control">
                <label> Task </label>
                <input type="text" 
                placeholder='Add Task'
                value={text} 
                onChange={(e) => {
                    settext(e.target.value)
                }}
                />
            </div>

            <div className="form-control">
                <label> Day &amp; Time </label>
                <input type="text" 
                placeholder='Add Day & Time'
                value={day}
                onChange={(e) => {
                setday(e.target.value)
                }}
                />
            </div>

            <div className="form-control form-control-check">
                <label> Set Reminder </label>
                <input type="checkbox"
                checked={reminder}
                value={reminder}
                onChange={(e) => {
                setreminder(e.currentTarget.checked)
                }}
                />
            </div>

            <input type="submit" value='Save Task' className='btn btn-block'/>
        </form>
    )
}

export default AddTask
