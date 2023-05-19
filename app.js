const express=require("express")
const path=require("path")
const app=express()
const fs=require("fs")
const port=80

app.use('/static',express.static('static'))
app.use(express.urlencoded())

app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))

app.get("/",(req,res)=>{
    const con="this is the best content on internet so far so use it wisely"
    const params={'title':'Pubg is the best game',"content":con}
    res.status(200).render('index.pug',params)
})

app.post('/',(req,res)=>{
    name=req.body.name
    age=req.body.age
    gender=req.body.gender
    address=req.body.address
    more=req.body.more
    let outputToWrite='the name of the client is ${name},${age} years old,${gender},residing at ${address}.More about him/her: ${more}'
    fs.writeFileSync('output.txt',outputToWrite)
    const params={'title':'Your form has been submitted'}
    res.status(200).render('index.pug',params)
})

app.get("/",(req,res)=>{
    res.status(200).send("This is homepage my first express app with Harry")
})

app.get("/about",(req,res)=>{
    res.send("This is about page my first express app with Harry")
})

app.post("/about",(req,res)=>{
    res.send("This is post request my first express app with Harry")
})

app.get("/this",(req,res)=>{
    res.status(404).send("This page is not found")
})

app.listen(port,()=>{
    console.log(`This application started successfully on port ${port}`)
})