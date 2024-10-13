import express from "express";
import product from '../data/dataProducts.mjs'//import data to this page
import products from "../data/dataProducts.mjs";
let router = express.Router();  //allow browser to have acess to this file

//@route - GET /products
//@desc  Gets all products ----- http://localhost:3000/products
router.get('/', (req, res)=> {
    res.json(product); //allowing me to use the >data< imported from dataProduct.mjs
});


//parameters GET ---------------------------------------------------------
//@route GET 1 product --------   http://localhost:3000/products/3
router.get('/:id',(req, res)=>{
    const product = products.find((p) => p.id == req.params.id);
    if (product) res.json(product);
});


// POST -------------------------------------------------------------------

 router.post('/:id',(req, res)=>{
    if(req.body.name && req.body.quantity && req.body.note){
        if(products.find((p) => p.name == req.body.name)) {
            res.json({ error: 'Item already exist in the list'});
            return;
        }
        let productOptions = {   //format to create a new data base 
        id: products[product.length -1].id + 1,
        name: req.body.name,
        quantity: req.body.quantity,
        note: req.body.note,
    }; 
        // adding - push a new product to data base       http://localhost:3000/products/:id
    products.push(productOptions);
    res.json(products[products.length - 1]);
   } else res.send(`Incorrect info`);  
 });







 export default router;

//