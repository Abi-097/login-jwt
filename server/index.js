import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'
import dotenv from 'dotenv'

// const express = require('express')
const app = express()


app.get('/hello',(req, res)=>{
res.send('hello world')
})

app.listen(3000, ()=>{
    console.log("server is running on port 3000")
})
// app.use(express.json())
// app.use(morgan('tiny'))

// dotenv.config(server)
// const MONGODB_SERVER = 
// mongoose.connect()