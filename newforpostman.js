const express=require("express")
const app=express()
app.get("/user",(err,res)=>{
    var a={
        username:"muskan",
        password:21345465,
        hobbie:"dancing",
        age:19,
        birthplace:"delhi"
    }
    res.send(a)
})
app.get("/",(err,res)=>{
    res.send("i am win hurreyyy you are lose")
})
app.listen(3000,()=>{
    console.log("welcome to the game")
})