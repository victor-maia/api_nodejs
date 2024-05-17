const AppError = require('../utils/appError')


class UsersController {
  create(request, response) {
    const { name, email, password, } = request.body

    if(!name){
      throw new AppError("O nome é obrigatorio")
    }

    if(password.length < 8 ) {
      throw new AppError("Senha menor que 8 caracteres")
    }
    response.json({ name, email, password})
  }
}

module.exports = UsersController