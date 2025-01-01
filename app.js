// const express = require('express');
// const app = express();

// app.set('view engine', 'ejs');

// app.use((req, res , next ) => {
    
//     res.render('index');
// })
// app.get('/product', (req, res) => {
//     res.send('this is a product');
//   })

// app.post('/get-form-data',(req, res) => {
// console.log(req.body);
// res.send(' data received');
// })

// // Start the server
// app.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// });

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const userModel = require('./models/user');// Connect to MongoDB
const connection = require('./config/db');


app.use(express.static('public'));

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Middleware for logging
// app.use((req, res, next) => {
//     const a = 10;
//     const b = 10;
//     console.log('Sum of a and b:', a + b);
//     next();
// });

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Route to render the form
app.get('/', (req, res) => {
    res.render('index');
});

// Route to handle form submission
app.post('/get-form-data', (req, res) => {
    console.log(req.body); // req.body contains form data
    res.send('Data received');
});



app.get('/register', (req, res) => {
    res.render('register');
  });


// Route to handle registration form submission 
app.post('/register', async (req, res) => {

    const { username, email, password } = req.body;
    const newUser = await userModel.create({
        username : username,
        phone : phone,
        email : email,
        password : password,
    });
    res.send(newUser);
  });


// Another route example
app.get('/product', (req, res) => {
    res.send('This is a product');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});