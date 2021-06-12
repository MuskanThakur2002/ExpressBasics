var express=require("express")
var cookieparser=require("cookie-parser")
var app=express()
app.use(cookieparser())
// app.get("/",(req,res)=>{
//     res.cookie("username","muskan").send("cookie has been set")
// })
// app.get("/",(req,res)=>{
//     res.cookie("my_name","muskan",{expire:36000+Date.now()}).send("cookie has been set")
// })
app.get("/",(req,res)=>{
    res.cookie("my_name","muskan1",{maxAge:36000}).send("cookie has been set")
})
app.get("/show",(req,res)=>{
    res.send(req.cookies)
})
// app.get("/delete",(req,res)=>{
//     res.clearCookie("username").send("cookie has been deleted")
// })
app.listen(4000,()=>{
    console.log("yuppppp")
})

//https://www.javatpoint.com/sql-tutorial
