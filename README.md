<h1 align="center"> RocketNotes - Backend </h1>

<p align="center">
API RESTful para gerenciamento de notas, permitindo cadastro de usuários, criação, leitura, atualização e exclusão de notas com tags e links associados.
</p>
---

## 🚀 Tecnologias

- Node.js
- Express
- Knex.js
- SQLite3
- JWT para autenticação
- Multer para upload de arquivos

---

## ⚙️ Funcionalidades

- Cadastro e autenticação de usuários
- Criação, edição e remoção de notas
- Associação de tags e links às notas
- Upload de arquivos de avatar do usuário

---

## 📁 Instalação

```bash
git clone https://github.com/BernardoSa01/rocketnotes-backend.git
cd rocketnotes-backend
npm install
```

---

## 🔧 Configuração

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
PORT=3333
JWT_SECRET=sua_chave_secreta_aqui
```

---

## ▶️ Execução

```bash
npm run migrate # cria o banco de dados e aplica as migrations
npm run dev     # inicia o servidor em modo desenvolvimento
```

A API estará disponível em: `http://localhost:3333`

---

## 🔗 Endpoints principais (exemplos)

- `POST /users` - cria um novo usuário
- `POST /sessions` - autentica e retorna token JWT
- `POST /notes` - cria nova nota com tags e links
- `GET /notes/:id` - busca detalhes de uma nota
- `DELETE /notes/:id` - deleta uma nota existente

---

## 📸 Exemplos visuais (frontend)

Para visualizar o funcionamento da API, acesse o [repositório frontend](https://github.com/BernardoSa01/rocketnotes) correspondente.

---

## 🚀 Futuras melhorias

- Adição de testes automatizados (Jest)
- Integração com banco de dados PostgreSQL em produção
- Deploy na nuvem com Render ou Vercel

---

## 👩‍💻 Autor

Desenvolvido por [Bernardo Sá](https://github.com/BernardoSa01) 
