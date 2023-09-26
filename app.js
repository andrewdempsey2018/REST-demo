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

let jsonData = [
    {
        "alien": {
            "name": "Xenon",
            "origin": "Zeta Reticuli",
            "description": "Xenon is a highly intelligent, bipedal extraterrestrial species with grayish-blue skin and large, almond-shaped black eyes. They are known for their advanced technology and telepathic communication abilities. Xenon has a deep interest in studying human culture and behavior, often conducting covert observations on Earth.",
            "contact_status": "Indirect observation",
            "technology_level": "Far advanced",
            "home_planet": "Xenarion",
            "average_lifespan": "500 Earth years",
            "notable_traits": ["Telepathic communication", "Advanced spacecraft", "Interest in human culture"]
        }
    }
];


app.get('/json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(jsonData);
})

app.get('/addition/:num1/:num2', (req, res) => {
    let num1 = parseInt(req.params['num1']);
    let num2 = parseInt(req.params['num2']);
    let answer = num1 + num2;
    res.send("The result is: " + answer);
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