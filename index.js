const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());   
let db = require('./config/db');
const push = require('./controller/add');
const port = 5000;
const session = require('express-session');
const flash = require('connect-flash');


app.use(session({
  secret: 'secretKey',
  resave: false,
  saveUninitialized: true
}));

app.use(flash());

app.set('view engine', 'ejs');

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about'); 
});

app.get('/my-work', (req, res) => {
    res.render('project'); 
});
app.get('/contact', (req, res) => {
    let suc = req.flash("error")
    res.render('contact',{suc}); 
});
app.get("/certifications", (req, res) => {
    res.render("certificate"); 
});

app.post('/accept/message', (req, res) => {
    const { name, email, subject, message } = req.body;
    push(name, email, subject, message, req, res);
    
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
