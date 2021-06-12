const express = require("express")
const app=express()


app.get("/",(err,res)=>{
    res.write("<h1>welcome to the home page</h1>")
    res.write("<h1>welcome to the again home page</h1>")
    res.send()

})
app.get("/about",(err,res)=>{
    res.send("welcome to the about page")

})
// app.get("/temp",(err,res)=>{
//     res.send([{
//         id:1,
//         name:"muskan1" },
//         {id:2,
//         name:"muskan2"},
//         {id:3,
//             name:"muskan3"},
//         {id:4,
//             name:"muskan4"},
//         ])
// })
//second way

app.get("/temp",(err,res)=>{
    res.send([{
        id:1,
        name:"muskan1" },
        {id:2,
        name:"muskan2"},
        {id:3,
            name:"muskan3"},
        {id:4,
            name:"muskan4"},
        ])
})


app.get("/contact",(err,res)=>{
    res.send("welcome to the contact page")
})
app.listen(9000,()=>{
    console.log("welcome to express")
})
