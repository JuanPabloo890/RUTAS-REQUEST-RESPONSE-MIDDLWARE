//Creacion de ujn web server en Express

//Invocar la libreria de express
const express = require('express') //COMMONJS

const{engine} = require ('express-handlebars')

//importamos handlebars
//import { engine } from 'express-handlebars'; //ESMODULES




//crear una unstancia 
const app = express()

//=========RUTAS=========
//EL ORDEN DE LAS RUTAS IMPORTAN

//creacion de una ruta en la raiz
app.get('/',(req,res)=>{
    res.send("Bienvenidos")

})

//creacion de ruta en dashboard
app.get('/dashboard',(req,res)=>{
    res.send("Dashboard principal")
})


//=========USO DE REQUEST=========
app.use(express.json())
//body
//paramas
//query params

//enviando informacion con el post
app.post('/register',(req,res)=>{
    const{pedido, solicitado} = req.body
    res.send(`El pedido de ${pedido} es realizado por ${solicitado}`)
    
})

//variable que va a capturar la solicitud de la ulr
app.get('/pedido/:tipo',(req,res)=>{
    console.log(req.params)
    res.send(`El pedido es hamburguesa: ${req.params.tipo}`)
})

//
app.get('/search',(req,res)=>{
    console.log(req.query)
    if(req.query.tipo==="sencilla"){
        res.send("Hamburguesa sencilla")
    }else{
        res.send("Otro tipo de hamburguesa")
    }
})

//=========RESPONSE=========

//texto
app.get('/hamburguesa/simple',(req,res)=>{
    res.send("Hamburguesa - simple")
})

//imagen
console.log(__dirname)

app.get('/hamburguesa/doble',(req,res)=>{
    res.sendFile('./ham.jpg',{
        root:__dirname
    })
})

//archivo
app.get('/hamburguesa/triple',(req,res)=>{
    res.sendFile('./triple.docx',{
        root:__dirname    
    })
})

//json
app.get('/hamburguesa/mixta',(req,res)=>{
    res.status(201).json({
        "Tipo": "Mixta",
        "Extra": "No"
    })
})

//html,css,js



//utilizare un motor de plantillas
app.engine('handlebars', engine());
//extension de las paginas0
app.set('view engine', 'handlebars');

//ubicacion de directorio views
app.set('views', './src/views')

app.get('/hamburguesa/vegana',(req,res)=>{
    res.render('home')
})


//ubicacion del directorio views
//const ruta = path.join(__dirname, "views")
//app.set('views', ruta)

//alerta para cuando busquen otra pagina que no este definida
app.use((req,res)=>{
    res.send("404 - Not Found!")
})





// 100 bloqueos
// 200 satisfactorio
// 300 error de redireccion /redireccionamiento
// 400 error de usuario o del cliente
// 500 servidor

//Iniciar el servidor en el puerto 3000
app.listen(3000)
console.log("Web server ejecutandose en el puerto 3000")