import express, { Router } from "express";
//import product from '../data/dataProducts.mjs'//import data to this page
import products from "../data/dataProducts.mjs";

let router = express.Router();  //allow browser to have acess to this file

//@route - GET /products
//@desc  Gets all products ----- http://localhost:3000/products
router.get('/', (req, res)=> {
    res.json(products); //allowing me to use the >data< imported from dataProduct.mjs
});


//parameters GET ---------------------------------------------------------
//@route GET 1 product --------   
router.get('/:id',(req, res)=>{
    const product = products.find((p) => p.id == req.params.id);
    if (product) res.json(product);
});


// POST -------------------------------------------------------------------

 router.post('/',(req, res)=>{
    if(req.body.name && req.body.quantity && req.body.note){
        if(products.find((p) => p.name == req.body.name)) {
            res.json({ error: 'Item already exist in the list'});
            return;
        }
        let newProduct = {   //format to create a new data base 
        id: products[products.length -1].id + 1,
        name: req.body.name,
        quantity: req.body.quantity,
        note: req.body.note,
    }; 

    
        // adding - push a new product to data base       http://localhost:3000/products 
        products.push(newProduct);
        res.render('show', newProduct);
    res.json(products[products.length - 1]);
   } else res.send(`Incorrect info`);  
 });

router.get('/new', (req, res) => {
    res.render('newProduct');           //new product form
});


// PATCH  -----------------------------------------------------------------------------

router.patch('/:id',(req, res, next)=> {
    const productID = Number(req.params.id);
    const productItem = products.find((p) => p.id === productID);

    if (productItem){
        for(const key in req.body){
            if (productItem[key] !== undefined){
                productItem[key] = req.body[key];
            }
        }
        res.json(productItem);
    } else {
        res.status(404).json({ error: 'Product not found' })
    }
});
 
// DELETE - Remove product by ID  -----------------------------------------------------------------------
router.delete('/:id', (req, res) => {
    let productID = Number(req.params.id);
    const index = products.findIndex((p) => p.id === productID);
    if(index !== -1) {
        const deleteProduct = products.splice(index, 1); 
        res.json({ message: 'Product deleted successfully', product: deleteProduct});
    } else {
        res.status(404).json({ error: 'Product not found'})
    }
});



 export default router;
