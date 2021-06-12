const express=require("express")
const app=express()

//built in middleware

app.use(express.static(path))

app.get("/", (req,res)=>{
    res.send("hlo from the other side")
})
app.listen(3000,()=>{
    console.log(`listening to the port 3000`)
})