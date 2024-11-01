const { Router } = require("express")

const NotesController = require("../controllers/NotesController")
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const notesRoutes = Router()

const notesController = new NotesController()

notesRoutes.use(ensureAuthenticated)

notesRoutes.post("/", notesController.create)
notesRoutes.get("/", notesController.index)
notesRoutes.get("/:id", notesController.show)
notesRoutes.delete("/:id", notesController.delete)

module.exports = notesRoutes



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