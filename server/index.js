import express from 'express'
import mongoose from 'mongoose'

const app = express()

app.use(express.json())

const MONGODB_SERVER = 
mongoose.connect()