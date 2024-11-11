//Importação das bibliotecas necessárias
const express = require('express');
const cors = require('cors');

//Declarando a função do express como variável
const app = express();

//Importação da conexão com a Data Base
const connection = require('./mysql');

//Definição da porta do servidor
const port = 3000;

// Configurações do Express
app.use(express.json());

// Configuração do CORS
app.use(cors());

//Teste de conexão da porta pelo postman/thunderclient e console
app.get('/', (req, res) => {
  res.send('Bem-vindo a Hogwarts!');
});

//------------------------------------------//
    
// Criando um array de produtos
let produtos = [
     
];

// Rota para listar todos os produtos
app.get("/produtos", (req, res) => {
    const query = 'SELECT * FROM produtos';
    connection.query(query, (error, results, fields) => {
        if (error) {
            res.status(500).json({ message: "Erro ao buscar produtos" });
            return;
        }
        res.json(results);
    });
});

// Rota para obter um produto por ID
app.get("/produtos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const query = 'SELECT * FROM produtos WHERE id = ?';
    connection.query(query, [id], (error, results, fields) => {
        if (error) {
            res.status(500).json({ message: "Erro ao buscar produto" });
            return;
        }
        if (results.length > 0) {
            res.json(results[0]);
        } else {
            res.status(404).json({ message: "Produto não encontrado" });
        }
    });
});

// Rota para adicionar um novo produto
app.post("/produtos", (req, res) => {
    const newProduto = req.body;
    const query = 'INSERT INTO produtos SET ?';
    connection.query(query, newProduto, (error, results, fields) => {
        if (error) {
            res.status(500).json({ message: "Erro ao adicionar produto" });
            return;
        }
        res.status(201).json({ message: "Produto adicionado com sucesso" });
    });
});

// Rota para atualizar um produto
app.put("/produtos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const updateProduto = req.body;
    const query = 'UPDATE produtos SET ? WHERE id = ?';
    connection.query(query, [updateProduto, id], (error, results, fields) => {
        if (error) {
            res.status(500).json({ message: "Erro ao atualizar produto" });
            return;
        }
        res.json({ message: "Produto atualizado com sucesso" });
    });
});

// Rota para remover um produto
app.delete("/produtos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const query = 'DELETE FROM produtos WHERE id = ?';
    connection.query(query, [id], (error, results, fields) => {
        if (error) {
            res.status(500).json({ message: "Erro ao remover produtos" });
            return;
        }
        res.json({ message: "Produto removido com sucesso" });
    });
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
});