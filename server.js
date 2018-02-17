const express = require('express');
const app = express();

app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/css'));
app.use(express.static(`index.html`));

const port = process.env.PORT || 9000;

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

app.listen(port, () => {
    console.log('Listening on ' + port);
})