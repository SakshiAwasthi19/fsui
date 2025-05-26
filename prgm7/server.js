const express= require('express');
const cors=require('cors');
const app=express();
const PORT=3000;

app.use(cors());

const events=[
    {id:1,title:"tech talk", date:"2025-10-09"},
    {id:2,title:"webinar", date:"2025-10-11"}
];

app.get('/api/events', (req,res)=>{
    res.json(events);
});

app.listen(PORT,()=>{
    console.log(`server running at port: ${PORT}`);
});