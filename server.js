const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');
// const bodyParser = require('body-parser'); 
// app.use(bodyParser.json());

// tasks structre  [ allTasks : { id: int , task :  string }, ... ]
const tasks = JSON.parse(fs.readFileSync('./tasks.json', 'utf8'))

app.get('/', (req, res) => {
    res.send('Welcome to Eitan\'s server!')
})

app.get('/tasks', (req, res) => {
    res.send(tasks)
})

// example: /tasks/new?id=1&taks=do somthing
app.get('/tasks/new/:id/:task', (req, res) => {
    
    let newTask = { ...req.params }
    
    // Try elegntly append and not completly rewrite?
    tasks.allTasks.push(newTask)

    fs.writeFile('./tasks.json', JSON.stringify(tasks), (err) => {
        err ? res.send(err) : res.send(`Added task ${newTask.id} successfully`)
    })

})

// example: /tasks/remove?id=1
app.get('/tasks/remove/:id', (req, res) => {
    
    let idToDelete = req.params.id

    tasks.allTasks = tasks.allTasks.filter((task) => task.id != idToDelete)

    res.send('done')
    fs.writeFile('./tasks.json', JSON.stringify(tasks), (err) => {
        err ? res.send(err) : res.send(`Removed task ${idToDelete} successfully`)
    })

})

app.listen(port, () => {
    console.log(`server up and running on port ${port}`)
})