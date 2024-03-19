import express from 'express'
import cors from'cors'
import axios from 'axios';
import { log } from 'console';
const server=express();
server.use(cors())
server.get('/weather',async(req,res)=>{
    try{
        console.log(req.query.cityname)
const {data}=await axios.get(`http://api.tomorrow.io/v4/weather/forecast?apikey=2aj7QwO7BAn76KjXQ6V8Ww5QMcPefSJU&location=${req.query.cityname}`)
res.status(200).json({data})
    }
    catch(err){
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
})

server.get('/location',async(req,res)=>{
    try{
const {data}=await axios.get(`http://api.tomorrow.io/v4/weather/forecast?apikey=2aj7QwO7BAn76KjXQ6V8Ww5QMcPefSJU&location=${req.query.long}${","}${req.query.lat}`)
res.status(200).json({data})
    }
    catch(err){
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
})


server.listen(8006,()=>{
    console.log("Server is running")
})