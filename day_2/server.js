const express = require('express');


const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/about1', (req, res) => {
  res.send('About1 Paggjhgjhe');
});

app.get('/contact', (req, res) => {
  res.send('Contact Page');
});

app.listen(3000);