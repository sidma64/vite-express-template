import express from 'express'

const PORT = 3000

const app = express()

app.get('/', (req, res) => {
    res.json('Hello Worlddddfadfadf!')
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
