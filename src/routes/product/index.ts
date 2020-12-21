import express from "express";
import { createProduct } from "../../controllers/products/createProduct";
import { deleteProduct } from "../../controllers/products/deleteProduct";
import { getProduct, getProductID } from "../../controllers/products/getProduct";
import { updateProduct } from "../../controllers/products/updateProduct";


const productRouter = express.Router();

productRouter.post('/' , createProduct);
productRouter.get('/', getProduct);
productRouter.get('/:id', getProductID)
productRouter.put('/:id', updateProduct);
productRouter.delete('/:id', deleteProduct);

export default productRouter ; 