const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Product = require('./models/productModels');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/product', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    return res.status(400).send({ error: 'Error fetching products' });
  }
});

app.post('/product', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    console.error('Error creating product:', err);
    return res.status(400).send({ error: 'Product creation failed' });
  }
});

app.get('/test', (req, res) => {
  res.send('Hello Test!');
});

const uri = 'mongodb+srv://toshcode:dn8g8Ef7yY7BzWdr@cluster0.je0rm.mongodb.net/Node';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(8000, () => {
      console.log('Example app listening on port 8000!');
    });
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });
