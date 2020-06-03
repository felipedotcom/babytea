# Projeto experimental para chá de bebe online

## Client configs

1. Entre na pasta `client` e execute `npm install`

1. Criar um arquivo .env na raiz de client, com:
  ```
  PHONE=9999999999999
  API=http://enderecodaapi.com
  ```
  
  Substitua o valor de PHONE para seu telefone com DDI DDD e número local. E API para o endereco da API.

1. Para iniciar a aplicacão use `npm run start`, e para build `npm run build`, pois estes gerarão dinamicamente os arquivos de ambiente que o angular precisa

## Server congis

1. Entre na pasta `server` e execute `npm install`

1. Criar arquivo .env com a variavel `ACCESS_TOKEN_SUPERSECRET` e defina um secret para o token