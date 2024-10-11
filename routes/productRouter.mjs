import express from "express";
import product from '../data/dataProducts.mjs'//import data to this page
import products from "../data/dataProducts.mjs";
let router = express.Router();  //allow browser to have acess to this file

//@route - GET /products
//@desc  Gets all products ----- http://localhost:3000/products
router.get('/', (req, res)=> {
    res.json(product); //allowing me to use the >data< imported from dataProduct.mjs
});


//parameters GET - POST -  PATCH - DELETE
//@route GET 1 product --------   http://localhost:3000/products/3
router.get('/:id',(req, res)=>{
    const product = products.find((p) => p.id == req.params.id);
    if (product) res.json(product);
});

 router.post('/:id',(req, res)=>{
    if(req.body.name && req.body.quantity && req.body.note){
        const options = {
        id: product.id,
        name: product.name,
        quantity: product.quantity,
        note: product.note,
    }; 
  products.push(product);
   } else {
    res.send(`Incorrect info ${req.params.productid}`);
   }
 });







export default router;