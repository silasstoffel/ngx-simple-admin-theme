# NGX Simple Admin Theme

  

Projeto criado com [Angular CLI](https://github.com/angular/angular-cli) versão 9.0.4. O Objetivo desse projeto é servir como base de estudo e/ou exemplo de um app codificado com [Angular](https://github.com/angular/angular).

Como backend, foi usado [Simple Backend Node](https://github.com/silasstoffel/simple-node-backend-1 ) codificado em [Node](https://github.com/nodejs/node).

  
O projeto tem funções básicas como:
- Autenticação
- Autorização
- Criar contra
- Alterar Conta


## Configuração
Acesse `/src/assets/config/app.js` e edite  (api_url) o endereço que do backend:

`{"secret_key":  "#suaCh@veS3creta$","api_url":  "http://localhost:3000"}`

Por fim, execute o `yarn` na raiz do projeto para baixar às dependências 
 
## Executando o app

Rode o `ng serve` em modo em desenvolvimento, após compilado,  abra seu navegador em `http://localhost:4200/`.

Para compilação em modo de produção basta consultar documentação do [Angular CLI](https://github.com/angular/angular-cli)   
  