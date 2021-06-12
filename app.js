const path=require("path")
var express=require("express")
var app=express()
const staticpath=path.join(__dirname,"static")
app.use(express.static(staticpath))

app.get("/",(req,res)=>{
    res.send("hello from the express")
})
app.get("/about",(req,res)=>{
    res.send("hello world from the about express")
})
app.listen(8000,()=>{
    console.log("listning the port at 8000")
})
