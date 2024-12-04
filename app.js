const express = require('express');

const app = express();

const operations = [
    {
        name: 'add',
        value: '+'
    },
    {
        name: 'sub',
        value: '-'
    },
    {
        name: 'mult',
        value: '*'
    },
    {
        name: 'div',
        value: '/'
    },
];

app.get('/calc', (req, res) => {
    let first = Math.round(Math.random() * 9) + 1;
    let second = Math.round(Math.random() * 9) + 1;

    let data = {first, second}
    for (let operation of operations) {
        const str = `${first} ${operation.value} ${second}`
        data[operation.name] = `${str} = ${eval(str)}` 
    }
    res.json(data);
});

app.use(express.static('public'))
app.use('/CalcService', express.static('public', {extensions: ['html']}))

app.listen(5000, () => console.log('listening on port 5000'));