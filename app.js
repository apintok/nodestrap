const express = require('express'),
    path = require('path'),
    port = process.env.PORT || 3000,
    app = express();
// ---------------------------------------- \\

// SERVER PUBLIC DIRECTORY
const publicDir = express.static(path.join(__dirname, '/public'));
app.use(publicDir);

// SERVE BOOTSTRAP & JQUERY & SET VIEW ENGINE
const bsCssDir = express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css'));
app.use(bsCssDir);
const bsJsDir = express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js'));
app.use(bsJsDir);
const jqDir = express.static(path.join(__dirname, '/node_modules/jquery/dist/'));
app.use(jqDir);
const popperJs = express.static(path.join(__dirname, '/node_modules/@popperjs/core/dist/umd'));
app.use(popperJs);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log('ONLINE: ' + port);
});