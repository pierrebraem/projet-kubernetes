const express = require('express');

const app = express();
const appProperties = {
    port: 3000
}

app.get('/', (req, res) => {
    res.send("hello world")
});

app.get('/getPierre', (req, res) => {
    res.send("coucou, c'est Pierre")
})

app.get('/getJeremy', (req, res) => {
    res.send("coucou, c'est Jérémy")
})

app.listen(appProperties.port, () => {
    console.log(`app running on port ${appProperties.port}`);
})