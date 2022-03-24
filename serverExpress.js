const express = require ('express');
const container = require ('./controllers/manejadorArchivos');


const prods = new container ('./controllers/productos.json')


app = express(); 

const PORT = 8080;

const server = app.listen(PORT, ()=> {
    console.log(`servidor escuchando en el puerto ${server.address().port}`)
})

server.on('error', error => console.log(`este es el error: ${error}`))

// app.use(express.json())
// app.use(express.urlencoded({extended: true}))

app.get('/productos', (req, res) => {
    prods.getAll().then(resp=>res.send(resp))
})

app.get("/productoRandom", (req, res)=>{
    prods.getAll().then(resp=>res.send(
      resp[Math.floor(Math.random()*resp.length)]
    ))
  })

 

