const express = require('express');
const router = express.Router();
const { getProducts, createProduct, deleteProducts, updateProducts } = require('../controllers/productsController');


router.get('/products/', getProducts);
router.post('/products', createProduct);
router.delete('/products/:id', deleteProducts)
router.put('/products/:id', updateProducts)
module.exports = router;
