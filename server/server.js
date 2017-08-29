const express = require('express');


const app = express();


app.get('/',(req,res) => {
    //res.status(201).send('hello world!');
    res.status(404)
        .send({
            error: 'error occured',
            name: 'todo app'
        });
});

app.get('/users', (req,res) => {
    res.send([
        {
            name: 'ilker',
            age: 32
        },
        {
            name: 'ipek',
            age: 31
        },
    ])
});

app.listen(3000, () =>{
    console.log('server is up at port 3000');
});

module.exports.app = app;
