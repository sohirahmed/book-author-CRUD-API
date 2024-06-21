import express from 'express'

import bookRouter from './src/modules/books/book.routes.js'
import authorRouter from './src/modules/authors/author.routes.js'
import connectionDB from "./DB/connectionDB.js"
const app = express()
const port = 5000

app.use(express.json())
app.use('/books', bookRouter)
app.use('/authors', authorRouter)

connectionDB()

app.use('*', (req, res) => res.send('404 not found'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))