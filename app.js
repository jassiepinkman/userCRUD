const express = require('express');
const app = express();
const path = require('path');
const expressHandleBars = require('express-handlebars');
require('./Database/database');
const userController = require('./Routes/user');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended : true 
}));

app.use(bodyParser.json());

app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', expressHandleBars({ extname : 'hbs', defaultLayout: 'mainLayout', runtimeOptions: {allowProtoPropertiesByDefault: true, allowProtoMethodsByDefault: true }, layoutsDir: __dirname + `/views/layouts/`}));
app.set('view engine', 'hbs');

app.listen(3000, () => {
    console.log(`Express running at port 3000`);
});

app.use('/user', userController);

