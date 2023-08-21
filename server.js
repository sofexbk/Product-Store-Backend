const express=require('express')
const cors=require('cors')

const app=express()

var corsOption={
    origin:'https://localhost:4000',
} 

//middleware
app.use(cors(corsOption))

app.use(express.json())

app.use(express.urlencoded({extended:true}))

//testing api
app.get('/',(req,res)=>{
    res.json({ message:"Hello world"})
})


//port 
const PORT = process.env.PORT||5000

//server

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})