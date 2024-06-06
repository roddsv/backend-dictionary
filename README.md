# Back-end Challenge - Dictionary

Esse projeto é um challenge by Coodesh.

## Descrição do Projeto

Aplicativo para listar palavras em inglês, que utiliza como base a API [Free Dictionary API](https://dictionaryapi.dev/) e exibe termos em inglês e gerenciar as palavras visualizadas.

#### Tecnologias (Back-End):
- API (Node.js) com TypeScript e Express;
- Banco de dados PostgreSQL (Heroku Postgres).

#### Bibliotecas utilizadas
- 'Sequelize' para manipular o banco de dados;
- 'jsonwebtoken' para geração de token no processo de login
- 'ejs' para geração das views do projeto
- 'body-parser' para recebimento dos dados dos forms dentro dos endpoints.

#### Sequência utilizada
1. Criação de banco de dados Postgres dentro do Heroku (os dados encontram-se no arquivo .env, com as credenciais de conexão do banco que não estão sendo expostas por conta do arquivo gitignore, mas que será disponibilizada na apresentação posterior do projeto);
2. Após a conexão com o banco, criação do arquivo index.ts na pasta raiz do projeto, determinando view engine, bibliotecas e configurações gerais do projeto;
3. Criação do endpoint de login, com form que recebe email e senha e cria token JWT mediante conferência no banco de dados.
4. Criação de endpoints e template de área logada

#### Rodando o projeto
Abra o terminal na parta do projeto e execute:
1. npm install --global yarn
2. yarn install
3. yarn start

Vá ao seu browser e abra na porta 3001 (http://localhost:3001). Isso exibirá o json:
```
{
    "message": "Fullstack Challenge 🏅 - Dictionary"
}
```
Depois, vá para: http://localhost:3001/login

Com o banco de dados conectado corretamente, as informações de login são:

login: example@email.com
senha: test

Depois, você verá uma textarea com as informações do usuário logado.

Embaixo da segunda textarea, que tem a mensagem: Nenhuma palavra pesquisada. Pesquise abaixo para carregar os dados aqui.",
você pode clicar em: Buscar palavras. Isso abrirá uma nova página de busca. Insira a palavra e ela será exibida com o consumo da API Free Dictionary.

Caso queira cadastrar um novo usuário, clique em cadastrar e preencha o formulário.


