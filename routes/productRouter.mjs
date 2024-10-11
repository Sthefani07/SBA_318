import express from "express";
import product from '../data/dataProducts.mjs'
let router = express.Router();  //allow acess to this file

router.get('/', (req, res)=> {
    res.json(product);
});

// router.post((req, res)=>{

// })







export default router;