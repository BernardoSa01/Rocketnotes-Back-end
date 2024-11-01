// controller para implementar autenticação de usuário
const knex = require('../database/knex')
const AppError = require('../utils/AppError')
const { compare } = require('bcryptjs') // função do bcrypt para comparar senha criptografada
const authConfig = require('../configs/auth')
const { sign } = require('jsonwebtoken')

class SessionsController {
  async create(request, response) {
    const { email, password } = request.body

    const user = await knex('users').where({ email }).first()
    
    if (!user) {
      throw new AppError('E-mail e/ou senha incorretos', 401)
    }

    // comparando a senha do usuário com a senha criptografada
    const passwordMatched = await compare(password, user.password)

    // Se a senha não conferir, lançar o erro
    if (!passwordMatched) {
      throw new AppError('E-mail e/ou senha incorretos', 401)
    }

    const { secret, expiresIn } = authConfig.jwt

    // Criando o token
    const token = sign({}, secret, {
      subject: String(user.id),
      expiresIn
    })

    return response.json({user, token})
  }
}

module.exports = SessionsController;