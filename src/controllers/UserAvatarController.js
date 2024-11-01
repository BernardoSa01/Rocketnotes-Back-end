const knex = require('../database/knex')
const AppError = require('../utils/AppError')
const DiskStorage = require('../providers/DiskStorage')

class UserAvatarController {
  async update(request, response) {
    // pegando o id do usuário
    const user_id = request.user.id

    // pegando nome do arquivo que o usuário fez upload
    const avatarFilename = request.file.filename

    const diskStorage = new DiskStorage()

    // buscando os dados do usuário para atualização 
    const user = await knex('users')
    .where({ id: user_id }).first()

    // Validação para verificar se o usuário existe
    if (!user) {
      throw new AppError('Somente usuários autenticados podem mudar o avatar', 401)
    }

    /* Validação para que, se o usuário já tiver uma foto de avatar,
       a mesma seja excluída para dar lugar a próxima. 
    */

    if (user.avatar) {
      await diskStorage.deleteFile(user.avatar)
    }

    const filename = await diskStorage.saveFile(avatarFilename)
    user.avatar = filename

    await knex('users').update(user).where({ id: user_id })

    return response.json(user)

  }
}

module.exports = UserAvatarController