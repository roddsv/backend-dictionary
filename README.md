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


