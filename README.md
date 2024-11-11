# CRUD de Produtos em Node.js com MySQL de uma Loja de Tênis

Este projeto é um sistema CRUD desenvolvido em Node.js e Express, permitindo o gerenciamento de produtos em um banco de dados MySQL. Ele fornece APIs para listar, adicionar, atualizar e remover produtos, simplificando o controle dos itens no estoque.

## Índice
- [Descrição do Projeto](#descrição-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Configuração do Banco de Dados](#configuração-do-banco-de-dados)
- [Como Executar o Projeto](#como-executar-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Licença](#licença)

## Descrição do Projeto
O programa conecta-se ao banco de dados MySQL e realiza operações de CRUD para gerenciar registros de produtos, incluindo:
- Inserção de novos produtos.
- Visualização dos registros dos produtos.
- Atualização e remoção de produtos do banco de dados.

## Pré-requisitos
- **Node.js** (versão 14+)
- **MySQL** (Servidor MySQL em execução)
- **Biblioteca MySQL para Node.js:** MySQL2 instalada como dependência do projeto.


## Instalação da Biblioteca MySQL para Node.js
A biblioteca MySQL2 já está especificada no arquivo package.json deste projeto, mas caso precise instalar manualmente, use:
```
npm install mysql2
```

## Configuração do Banco de Dados
1. Certifique-se de que o servidor MySQL está em execução.
2. Crie o banco de dados e a tabela necessárias:
```
CREATE DATABASE loja_tenis;
USE loja_tenis;

CREATE TABLE produtos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    modelo VARCHAR(50),
    valor DECIMAL(10, 2),
    quantidade INT
);
```
## Como Executar o Projeto
1. Clone o repositório e abra a pasta do projeto no VS Code.
2. Abra o terminal integrado no VS Code (Ctrl + `` ou Terminal > Novo Terminal`).
3. Instale as dependências do projeto:
```
npm install
```
4. Configure o arquivo mysql.js com as credenciais de acesso ao banco de dados, caso necessário.
5. Inicie o servidor:
```
npm start
```
O servidor estará disponível na porta definida (ex: http://localhost:3000).

## Funcionalidades
- Listar Produtos: Exibe todos os produtos cadastrados no banco de dados.
- Visualizar Produto por ID: Mostra os detalhes de um produto específico.
- Cadastrar Novo Produto: Adiciona um novo registro de produto.
- Atualizar Produto: Permite editar informações de um produto existente.
- Remover Produto: Exclui um produto do banco de dados.

## Dicas para Configuração no VS Code
- Extensões Recomendadas:
  - Node.js Extension Pack: Extensão que facilita o desenvolvimento em Node.js, incluindo intellisense e snippets.
  - MySQL (ou outra extensão de cliente SQL) para conectar-se e visualizar o banco de dados diretamente no VS Code.
  - ESLint: Para manter o código limpo e consistente.
- Depuração: Configure a depuração do Node.js no VS Code:
1. Acesse Executar e Depurar no painel esquerdo.
2. Clique em Criar um arquivo launch.json e selecione Node.js como ambiente.
3. Isso permite definir breakpoints e depurar diretamente no editor.

## Licença
Este projeto é de uso educacional e pode ser livremente modificado.
