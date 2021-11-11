const express = require("express")
const bodyParser = require("body-parser")

const app = express()

let tasks = []

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))

app.set("view engine", "ejs")


app.get("/", function(req, res){

    let today = new Date()
   
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    let day = today.toLocaleDateString("en-US", options)
    res.render("list", {kindOfDay: day, newListItems: tasks})
})

app.post("/", function (req, res){
    let task = req.body.addTask
    tasks.push(task)

    res.redirect("/")

})

app.listen(3000, function(){
    console.log("Server has started on port 3000")
})