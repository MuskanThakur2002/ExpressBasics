const path=require("path")
var express=require("express")
var app=express()
const hbs=require('hbs')
const staticpath=path.join(__dirname,"static")
const templatepath=path.join(__dirname,"template")
const partialpath=path.join(__dirname,"template/partial")
// app.use(express.static(staticpath))

app.set("view engine","hbs")
// for changing template

app.set("views",templatepath)
hbs.registerPartials(partialpath)

app.get("/",(req,res)=>{
    res.render("index2")
})

app.get("/",(req,res)=>{
    res.send("hello from the express")
})
app.get("/about",(req,res)=>{
    res.render("aboutus")
})


app.listen(3000,()=>{
    console.log("listning the port at 3000")
})