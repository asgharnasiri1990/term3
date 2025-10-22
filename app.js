//path
const path=require('node:path')

const data=path.parse(__filename)
console.log(data)

//OS
const os=require('node:os');
console.log(os.cpus())

const total=os.totalmem()
const freemem=os.freemem()
console.log(`total memory: ${total} and free memory is: ${freemem}`)

//Arch
const arch=os.arch()
console.log(`system architecture is: ${arch}`) 

//FS
const fs=require("node:fs")
// synchronous 
const files=fs.readdirSync('./')
console.log(files) 

/*asynchronous */ 
fs.readdir('./',(er,file)=>{
if (er) console.log(`errors: ${er}`)
else  console.log(file)
})

//Event
const EvenEmmiter=require('events')
const emitter= new EvenEmmiter();

emitter.on('messageLogged',(data)=>{
    console.log("listener called",data)
})
emitter.emit("messageLogged",{id:1 , name:"an unknown person"})


//HTTP
const http=require('http')
const server=http.createServer((req , res)=>{
     if(req.url==="/"){
        res.write("hello from home page") //shows data in browser
        res.end()
     }

     if(req.url ==='/api/course'){
        res.write(JSON.stringify(['html','css'])) //shows iformation in
        res.end()
     }
});

// server.on("connection",(socket)=>{
//     console.log('new connection cnonnected')
// })

server.listen(3000)
console.log("server is listening")