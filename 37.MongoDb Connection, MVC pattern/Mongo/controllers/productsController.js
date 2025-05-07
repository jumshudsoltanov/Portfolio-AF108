const product = require('../models/Products');

exports.getProducts = async (req, res) => { 
  try {
    const products = await product.find();  
    res.status(200).json(products); 
  } catch (error) {
    res.status(500).json({ message: 'Server error', error }); 
  }
};


exports.createProduct = async (req, res) => {
  try {
    const { name, category, count, price } = req.body;
    const newProduct = new product({ name, category, count, price });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create product', error });
  }
};



exports.deleteProducts = async (req, res) => {

   const id = req.params.id
   product.findByIdAndDelete(id).then(() => {
    res.status(200).json("Delete Successfully")
   }).catch((err) => {
    res.json('Delete errors')
   })


}


exports.updateProducts = async (req, res) => {
  const id = req.params.id

  product.findByIdAndUpdate(id).then(() => {
    res.status(200).json("Products Update Success")
  }).catch ((err) => {
    res.json("Update Unsuccessfully")
  })


}