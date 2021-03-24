import Header from "./components/Header";
import  { useState } from 'react'
import Tasks from "./components/Tasks";
import './index.css'
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setshowAddTask] = useState(false)

    const [tasks, setTasks] = useState(
        [
            {
               id: 1,
               text: 'Doctors Appointment',
               day: 'Feb 5th at 2:30pm',
               reminder: true,
            },
        
            {
                id: 2,
                text: 'Meeting at School',
                day: 'Feb 6th at 1:30pm',
                reminder: true,
            },
        
            {
                id: 3,
                text: 'Food Shopping',
                day: 'Feb 5th at 2:30pm',
                reminder: false,
            }
        ]
    )

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }  

  // delete task
  const deleteEvent = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }

  return (
    <div className="container">
       <Header onAdd={() => setshowAddTask(!showAddTask)} showAddTask={showAddTask}/>
    {showAddTask && <AddTask onAdd={addTask} /> }  
    { tasks.length >0 ? <Tasks tasks={tasks} 
    onDelete={deleteEvent} onToggle={toggleReminder} /> : (
      ' <h3> o </h3> '
)}
    </div>

  );
}

export default App;
