const express = require('express');

const app = express();
const appProperties = {
    port: 3000
}

app.get('/', (req, res) => {
    res.send("hello world")
});

app.listen(appProperties.port, () => {
    console.log(`app running on port ${appProperties.port}`);
})