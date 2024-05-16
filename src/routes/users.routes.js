const { Router } = require('express')

const UsersController = require('../controllers/UserController')

const usersRoutes = Router()


function myMiddleware (request, response, next) {
    console.log("Você passou pelo middleware")
    console.log(request.body)

    if(!request.body.admin){
        return response.json({"message": "user unauthorized"})
    }

    next();
}



const usersController = new UsersController()

usersRoutes.post('/', myMiddleware, usersController.create)

module.exports = usersRoutes