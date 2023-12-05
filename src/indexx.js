app.get('/', (req,res)=>{
    res.send("Landing page")
})

app.get('/dashboardd', (req,res)=>{
    res.send("Bienvenido - Usuario")
})