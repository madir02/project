// Подключение необходимых модулей
const express = require('express');
const bodyParser = require('body-parser');

// Создание экземпляра Express приложения
const app = express();
const PORT = 3000;

// Пример базы данных (заглушка)
let todos = [];

// Разрешение парсинга JSON в запросах
app.use(bodyParser.json());

// Обработка GET запроса на получение списка задач (todos)
app.get('/api/todos', (req, res) => {
    res.json(todos);
});

// Обработка POST запроса на добавление новой задачи
app.post('/api/todos', (req, res) => {
    const todo = req.body;
    todos.push(todo);
    res.status(201).send('Задача успешно добавлена');
});

// Слушаем указанный порт
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
