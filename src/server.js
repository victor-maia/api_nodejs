require("express-async-errors")

const migrationsRun = require('./database/sqlite/migrations')
const AppError = require('./utils/appError')
const express = require('express')
const routes = require('./routes')

const app = express()
app.use(express.json())

migrationsRun();

app.use(routes)



app.use((error, request, response, next ) => {
    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            status: "error",
            error: error.message
            
        })
    }

    console.error(error)


    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
})
const PORT = 3000
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))