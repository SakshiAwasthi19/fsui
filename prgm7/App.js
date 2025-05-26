import React,{useState} from 'react';

function App(){
  const [events,setEvents]=useState([]);
  const loadEvents=async()=>{
    const res=await fetch("http://localhost:3000/api/events");
    const data= await res.json();
    setEvents(data);
  };
  return(
    <div style={{padding:'20px'}}>
      <h1>Event List</h1>
      <button onClick={loadEvents}>Load Event</button>
      <ol>
        {events.map(event=> (
          <li key={event.id}>
            {event.title}-{event.date}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;