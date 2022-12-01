const express = require('express');
const app = express();
const port = 8000;

const indexRouter = require('./routes');

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + './views'));
app.use('/static', express.static(__dirname + '/static'));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(port, () => console.log(`http://localhost:${port}`));

app.use('/', indexRouter);

app.get('*', (req, res) => {
    res.render('404');
})
