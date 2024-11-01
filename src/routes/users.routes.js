const { Router } = require("express")
const multer = require("multer")
const uploadConfig = require("../configs/upload")




const UsersController = require("../controllers/UsersController")
const UserAvatarController = require('../controllers/UserAvatarController')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const usersRoutes = Router()
const upload = multer(uploadConfig.MULTER)

const usersController = new UsersController()
const userAvatarController = new UserAvatarController()

usersRoutes.post("/", usersController.create)
usersRoutes.put("/", ensureAuthenticated, usersController.update)
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update)

module.exports = usersRoutes



/* O middleware é uma função, com a diferença de que conseguimos
extrair a requisição, a resposta, e o next, que é o destino da 
requisição, ou seja, para onde o middleware tem que seguir.  
function myMiddleware(request, response, next) {
  console.log('Você passou pelo Middleware!')
  
  if(!request.body.isAdmin) {
    return response.json({ message: "user unauthorized"})
    }
    
    next()
    }

   usersRoutes.use(myMiddleware)
    */
   
   
   
   
   /*
   Método GET
   app.get("/message/:id/:user", (request, response) => {
    const { id, user} = request.params
    
    response.send(`
    Mensagem ID: ${id}.
    Para o usuário: ${user}.
  `)
})

app.get("/users", (request, response) => {
  const { page, limit } = request.query

  response.send(`Página: ${page}. Mostrar: ${limit}`)
})*/