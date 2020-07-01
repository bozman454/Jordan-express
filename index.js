const express = require('express');

const request = require('request');
const bp = require('body-parser');

//const fs = require('fs');
const app = express();

app.use(bp())

// good habit to start now, setting up config files in the root of the repo
// const configz = JSON.parse(fs.readFileSync('./config.json', 'utf-8'))
const PORT = 9000

app.get('/api/demo', function (req, res) {



    ///JORDAN"S EXAMPLE
    var options = {
        method: 'GET',
        url: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
        qs: { term: 'car' },
        headers: {
            'x-rapidapi-host': 'mashape-community-urban-dictionary.p.rapidapi.com',
            'x-rapidapi-key': 'f8df2a770emsh8d994358338f8a7p181a4ajsn17c2ef979adc',
            useQueryString: true
        }
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        res.status(200).send(body)
    });

})


app.post('/api/sendstuff/:id', (req, res) => {

    console.log(req)
    if (req.params.id) {
        console.log(`request recieved, printing params now...`)
        console.log(req.params.id)
        res.status(200).send({ message: 'request recieved' });
    }
    else
        res.status(500).send({ message: 'error: was expecting a message body' })
})


app.listen(PORT, () => console.log(`server is up at port ${PORT}`))

