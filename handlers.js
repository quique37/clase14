const express = require('express')
const app = express()
const port = 9000

app.get ('/', function (request, respond) {
    respond.send('Contestando una petición por GET')
    })

app.post ('/', function (request, respond) {
    respond.send('Contestando una petición por POST')
    })

app.put ('/', function (request, respond) {
    respond.send('Contestando una petición por PUT')
    })

app.delete ('/', function (request, respond) {
    respond.send('Contestando una petición por DELETE')
    })

    app.listen(port, function () { 
        console.log(`Example app listening on port ${port}!`)
        })
