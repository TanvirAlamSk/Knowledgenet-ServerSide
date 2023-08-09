const express = require('express')
const cors = require("cors")
const app = express()
const port = process.env.PORT || 5000
app.use(cors())

const courses = require("./file/course.json")
const blog = require("./file/blog.json")
const teacher = require("./file/teacher.json")

app.get("/", (req, res) => {
    res.send("Server Connect Successful")
})

app.get("/courses", (req, res) => {
    res.send(courses)
})
app.get("/teachers", (req, res) => {
    res.send(teacher)
})

app.get("/course/:id", (req, res) => {
    const id = req.params.id
    const course = courses.find((c) => c.id == id)
    res.send(course)
})


app.get("/blog", (req, res) => {
    res.send(blog)
})


app.listen(port, () => {
    console.log(`server running on ${port}`)
})