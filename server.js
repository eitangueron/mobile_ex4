const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Welcome to Eitan\'s server!')
})

app.get('/tasks', (req,res) => {
    res.send()
})

app.post('/tasks/new', (req,res) => {
    // add to json
    res.send()
})

app.delete('tasks/remove', (req,res) => {
    // delete user by id
    res.send()
})

app.listen(port, () => {
  console.log(`server up and running on port ${port}`)
})