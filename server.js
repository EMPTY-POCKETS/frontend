const express = require('express');
const app = express();

app.use('/js', express.static(__dirname + '/js'));
app.use('/css', express.static(__dirname + '/css'));
app.use(express.static(`index.html`));
app.use('/img', express.static(__dirname + '/img'));

const port = process.env.PORT || 9000;

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

app.listen(port, () => {
    console.log('Listening on ' + port);
})