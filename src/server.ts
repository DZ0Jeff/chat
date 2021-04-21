import express from "express"

import "./database"

const port = 3333
const app = express()

app.listen(port, () => console.log(`Servidor iniciado! ${port}`))
