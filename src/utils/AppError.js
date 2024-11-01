/* Tratamento de exceção: desenvolver sabendo que a aplicação
poderá apresentar erros, utilizando uma estratégia para que, 
mesmo apresentando algum tipo de erro, a aplicação não venha
a parar de funcionar. */

class AppError {
  message;
  statusCode;

  constructor(message, statusCode = 400) {
    this.message = message
    this.statusCode = statusCode
  }
}

module.exports = AppError
