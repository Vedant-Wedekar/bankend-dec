const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use((req, res , next ) => {
    const a  = 10 ;
     const b =10 ;
      console.log(a+b);
    next()
},
(req, res) => {
    res.render('index');
});
app.get('/product', (req, res) => {
    res.send('this is a product');
  });

app.listen(3000) 

