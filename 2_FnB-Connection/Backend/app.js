require('dotenv').config();
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'Programming',
            joke: 'Why did the programmer quit his job? Because he didn\'t get arrays.'
        },
        {
            id: 2,
            title: 'Joke 2',
            joke: 'Joke 2'
        },
        {
            id: 3,
            title: 'Joke 3',
            joke: 'Joke 3'
        },
        {
            id: 4,
            title: 'Joke 4',
            joke: 'Joke 4'
        },
        {
            id: 5,
            title: 'Joke 5',
            joke: 'Joke 5'
        }
    ]
    res.send(jokes);
})

const port = process.env.PORT;

app.listen(port, () => console.log(`Server is running on port ${port}`));