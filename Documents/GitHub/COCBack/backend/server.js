const { configDotenv } = require('dotenv')
const express = require('express')
configDotenv()
const app = express()
const PORT = process.env.PORT||3000 

// app.use(express.static('dist')) small company problem

app.get('/api ',(req,res)=>{
    res.send('<h1>Hello world</h1>')
      
})

app.get('/api/jokes',(req,res)=>{

  const jokes = [
    {
      "id": 1,
      "title": "The Chicken Crossing",
      "content": "Why did the chicken cross the road? To get to the other side!"
    },
    {
      "id": 2,
      "title": "Dad Joke Alert",
      "content": "Did you hear about the cheese factory that exploded? There was nothing left but de-brie."
    },
    {
      "id": 3,
      "title": "Pun-tastic",
      "content": "I used to play piano by ear, but now I use my hands."
    }
  ]
    res.send(jokes)
})
 
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})