import React,{useState} from 'react';
import'./App.css';

function App(){
  const [tasks,setTask]=useState(["reading","sleeping"]);
  const [newTask,setNewTask]=useState('');

  const addTask=()=>{
    if(newTask.trim() !== ''){
      setTask([...tasks,newTask]);
      setNewTask('');
    }
  }

  const deleteTask=(index)=>{
    const updatedTasks= tasks.filter((_,i)=> i!== index);
    setTask(updatedTasks);
  }
  
  return(
    <div className="container">
      <h1>My Task-List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e)=>setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul className="task-list">
        {tasks.map((task,index)=>(
          <li key={index} className='task-item'>
            {task}
            <button className='delete-btn' onClick={()=>deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;