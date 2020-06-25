require('./models/db');

const express = require('express');
var app = express();

const produkController = require('./controllers/produkConroller');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');


app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());

app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');

app.listen(3000, () => {
    console.log(`Server started on port`);
});


app.use('/produk', produkController)