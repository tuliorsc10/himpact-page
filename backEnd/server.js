const app = require('./app')

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log("Servidor escutando")
    console.log(`CORS-enabled web server listening on port ${port}`)
})