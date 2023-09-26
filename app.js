const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');
const bodyParser = require('body-parser')

app.use(bodyParser.text());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/random/number', (req, res) => {
    let random = Math.floor(Math.random() * 10000);
    res.send("Your random number is: " + random);
})

app.get('/addition', (req, res) => {
    let random = Math.floor(Math.random() * 10000);
    res.send("Your random number is: " + random);
})

app.get('/random/message', (req, res) => {
    let random = Math.floor(Math.random() * 4);

    let message = "Embrace the beauty of each moment."

    if (random == 0) {
        message = "Create, dream, and inspire others."
    } else if (random == 1) {
        message = "Love deeply; it's worth it."
    } else if (random == 2) {
        message = "Explore, learn, and grow constantly."
    }

    res.send(message);
})

app.post('/sendmessage', (req, res) => {
    console.log('receiving data ...');
    console.log('body is ', req.body);
    res.send(req.body);
}
);

app.post('/dbbasic', (req, res) => {
    console.log('write to db...');
    fs.appendFile('database.txt', 'no message specified\n-----\n', function (err) {
        if (err) throw err;
    });
    res.send('saved to database')
}
);

app.post('/dbcustom', (req, res) => {
    console.log('write custom message to db...');
    fs.appendFile('database.txt', req.body + "\n-----\n", function (err) {
        if (err) throw err;
    });
    res.send('saved to database')
}
);



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})