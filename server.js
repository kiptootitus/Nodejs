const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Product = require('./models/productModels');
const Chart = require('./models/chartModels');
const Profile = require('./models/profileModel');

app.use(express.json());
app.use(express.static(__dirname + '/views'))
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static(__dirname + '/public'));

// index page
app.get('/', function(req, res) {
 

  res.render('pages/home', {
    title: 'Home'
  });
});
app.get('/profile', async(req, res) =>{
    try {
        const profile = await Profile.find();
        res.status(200).json(profile);
    } catch (err) {
        return res.status(400).send({ error: 'Error fetching profile' });
    }
})



// product api  should have 3 endpoints
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

// chart api should have 2 endpoints

app.get ('/chart', async (req, res) => {
    try {
        const chartProducts = await Chart.find();
        res.status(200).json(chartProducts);
    } catch (err) {
        return res.status(400).send({ error: 'Error fetching chart products' });
    }
});
app.post('/chart', async (req, res) => {
    try {
      const chartProduct = await Chart.create(req.body);
      res.status(201).json(chartProduct);
    } catch (err) {
      console.error('Error creating chart product:', err);
      return res.status(400).send({ error: 'Chart product creation failed' });
    }
  });
  


// test api
app.get('/test', (req, res) => {
    console.log(req.query);
    console.log(req.body);
  res.send(req.query);
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
