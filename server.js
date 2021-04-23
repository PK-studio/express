const express = require('express')
const server = express()
const port = 8000

server.get('/', (req, res) => {
    res.send('Hello word!')
})

server.use('/test', express.static('public'))

server.listen(port, () => {
    console.log('Server has been started - http://localhost:8000/')
})
