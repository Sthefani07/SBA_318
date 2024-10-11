import express from 'express';
import productRouter from './routes/productRouter.mjs';
import bodyParser from 'body-parser';


import product from "./routes/productRouter.mjs";

// Instance os express
const app = express();
const PORT = 3000;

//style file 
app.use(express.static('./styles'));

//body parsing middleware --- these lines helps the website understand the information people send to the grocery list
 app.use(bodyParser.urlencoded({ extended: true}));
 app.use(bodyParser.json({ extended: true }));





// Routes --- 2. second step
app.use('/products', productRouter);

// Middleware for error handling
// app.use((req, res)=> {
//     next(error(404, "Grocery list not found!"))
// });

// Listen  ----- 1. first step 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});