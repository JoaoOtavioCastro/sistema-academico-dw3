### sistema-academico-dw3

Repositório criado para atividade de Desenvolvimento Web 3

# Sistema de Gerenciamento de Salas de Aula (ERP Escolar)

Este projeto é um módulo de manutenção de salas de aula de um sistema ERP escolar. Ele permite realizar as operações de CRUD (Create, Read, Update, Delete) de salas de aula por meio de uma API RESTful. O projeto foi desenvolvido em Node.js utilizando o Express e o banco de dados SQLite com o padrão arquitetural MVC (Model-View-Controller).

## Regras de Negócio

![Regras de negócio](/regras_de_negocio.png)

## Funcionalidades

As operações CRUD disponíveis são:

- **GetAllSalasDeAula**: Retorna todas as salas de aula que não foram removidas (soft delete).
- **GetSalasDeAulaByID**: Retorna uma sala de aula específica pelo ID, se ela não foi removida.
- **InsertSalasDeAula**: Insere uma nova sala de aula.
- **UpdateSalasDeAula**: Atualiza as informações de uma sala de aula existente, pelo ID.
- **DeleteSalasDeAula** (Soft Delete): Marca uma sala de aula como removida sem excluí-la fisicamente.

## Tecnologias Utilizadas

- Node.js com Express para construção do servidor
- SQLite para persistência de dados
- Jest para testes unitários
- REST Client (VS Code) para testar manualmente a API
- Body-Parser para tratar o corpo das requisições

## Instalação

1. Clone o repositório para o seu ambiente local:

```bash
git clone https://github.com/seu-usuario/erp-salas.git
cd erp-salas
```

1. Instale as dependências do projeto:

```bash
npm install
```

1. Execute o servidor:

```bash
node index.js
```

O servidor estará disponível em `http://localhost:3000`.

## Endpoints da API

- **GET** `/api/salasdeaula` Retorna todas as salas de aula
- **GET** `/api/salasdeaula/id` Retorna uma sala de aula pelo ID
- **POST** `/api/salasdeaula` Insere uma nova sala de aula
- **PUT** `/api/salasdeaula/id` Atualiza uma sala de aula existente pelo ID
- **DELETE** `/api/salasdeaula/id` Marca uma sala de aula como removida (soft delete)

# Testes

## Testes com REST Client (VS Code)

Você pode testar a API diretamente no VS Code usando a extensão REST Client.

### Passos para testar:

1. #### Instalar a extensão REST Client:

2. #### Abrir o arquivo de testes:

    - No diretório do projeto, abra o arquivo `testeSalaDeAula.rest`.

3. #### Executar os testes:

    - Clique em "Send Request" acima de cada requisição HTTP no arquivo `.rest` para testar a API.

---

## Testes Unitários com Jest

Este projeto também inclui testes unitários com Jest para garantir o funcionamento correto das operações CRUD.

### Executando os testes unitários:

1. #### Instalar as dependências de desenvolvimento:

    Se ainda não fez isso, instale as dependências para os testes:

    ```bash
    npm install --save-dev jest supertest
    ```

2. #### Rodar os testes:

    Use o comando abaixo para executar os testes unitários:

    ```bash
    npm test
    ```

Os testes estão localizados no arquivo `tests/salaDeAula.test.js` e cobrem todas as funcionalidades do CRUD.
