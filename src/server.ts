import express from 'express'

const app = express()

app.get('/', (request, response) => {
    return response.json({ message: "API is ok" })
})

app.post('/new', (request, response) => {
    console.log('POST - /new')
    return response.json({ message: "User is saved!" })
})

app.listen(5000, () => console.log('Server is running on port 5000'))