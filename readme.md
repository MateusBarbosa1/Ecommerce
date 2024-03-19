# DOCUMENTAÇÂO

A documentação de um ecommerce usando nodejs!

### Passo a Passo

- Estrutura das Pastas
- Configurações Iniciais
- Criação do Servidor

## Estrura de Pastas

#### Padrão MVC

```
- controllers
- infra
- middlewares
- models
- prisma
  - migrations
- public
  - css
  - images
    - produtos
  - js
- routes
- views
```

## Configurações Iniciais

Primeiramente é necessario que você tenha o nodejs instalado na verção v20.11.1.  
Juntamente com o: npm, nvm e o docker.

Para comerçamos iremos criar um arquivo chamado: **.nvmrc**
e iremos colocar a versão do nodejs.

```
v20.11.1
```

Proximo Passo é baixar todas as dependencias.  
**Digite no seu terminal:**

```
npm init -y && npm install express ejs body-parser prisma @prisma/client bcrypt cookie-parser dotenv jsonwebtoken jwt-decode multer && npm install -D nodemon
```

Se quiser saber todas as dependencias que usaremos aqui estar a lista de todas elas:

- **prisma**: Um ORM para manipular mais facilmente o banco de dados.
- **bcrypt**: Um criptografador para transformar as senhas em hashes.
- **body-parser**: Um framework para pegar as requisições da aplicação.
- **cookie-parser**: Um framework para criar cookies.
- **dotenv**: Um framework para conseguirmos configurar o arquivo .env.
- **ejs**: A engine que usaremos.
- **express**: Framework web para Node.js.
- **jsonwebtoken**: Uma biblioteca para gerar e verificar JSON Web Tokens (JWT).
- **jwt-decode**: Uma biblioteca para decodificar JSON Web Tokens no lado do cliente.
- **multer**: Um middleware para lidar com uploads de arquivos em formulários HTML.

## Criação do Servidor

Primeiramente você devera criar na raiz do projeto um arquivo chamado: **server.js**  
e escrever nele esse codigo:

```javascript
// IMPORTAR AS PRINCIPAIS DEPENDENCIAS
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const path = require("path");

// INICIAR O EXPRESS
const app = express();

// CONFIGURAÇÔES
app.use(cookieParser()); // INICIAR O COOKIE PARSER
app.use(bodyParser.json()); // PERMITIR QUE O BODY PARSER TRABALHE COM JSON
app.use(bodyParser.urlencoded({ extended: true })); // PERMITE QUE SEJAM ENVIADOS ARRAYS
app.engine("html", require("ejs").renderFile); // PERMITE QUE A GENTE CONSIGA CRIAR UM .html MAS ELE SEJA EXECUTADO COMO .ejs
app.set("view engine", "html"); // SETA A ENGINE COMO HTML
app.use(express.static(path.join(__dirname, "./public"))); // DIZ QUE O PUBLIC É ESTATICO
app.set("views", path.join(__dirname, "./views"));

// CHAMA TODAS AS ROTAS
require("./routes/home")(app);
require("./routes/produtos")(app);
require("./routes/cuidados")(app);
require("./routes/cadastrar")(app);
require("./routes/login")(app);
require("./routes/account")(app);
require("./routes/sair")(app);
require("./routes/admin")(app);

// INICIA O SERVIDOR NA PORTA 3000
app.listen(3000, () => {
  console.log("server running on port 3000!");
});
```
