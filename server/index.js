import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'
import dotenv from 'dotenv'

// const express = require('express')
const app = express()
app.use(express.json());


app.post('/register', (req, res) =>{
    res.json("register");
})

app.post('/login', (req, res) =>{
    res.json("login");
})

app.get('/profile',(req, res)=>{
    res.json("profile");
})

app.listen(5000, ()=>{
    console.log("server is running on port 5000")
})
// app.use(express.json())  
// app.use(morgan('tiny'))

// dotenv.config(server)
// const MONGODB_SERVER = 
// mongoose.connect()