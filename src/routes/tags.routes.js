const { Router } = require("express")

const TagsController = require("../controllers/TagsController")
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')


const tagsRoutes = Router()

const tagsController = new TagsController()

tagsRoutes.get("/", ensureAuthenticated, tagsController.index)


module.exports = tagsRoutes



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