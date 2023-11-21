const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Hello User");
});

//sending file as response
app.get('/file', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.listen(4000, () => {
    console.log("Listening on port 4000");
})