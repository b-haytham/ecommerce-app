import express from "express";
import { createProduct } from "../../controllers/products/createProduct";


const productRouter = express.Router();

productRouter.post('/' , createProduct);

export default productRouter ; 