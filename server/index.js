const express = require('express')
const books = require('./controller/bookController')
const app = express()
const port = 4000


app.use(express.json())
app.use(express.static(__dirname + '/../build'))

app.get('/api/books', books.read )

app.post('/api/books', books.make)

app.put('/api/books/:id', books.update)

app.delete('/api/books/:id', books.delete)


app.listen(port, () => console.log(`Listening on Port: ${port}`))