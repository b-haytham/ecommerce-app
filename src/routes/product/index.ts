import express from "express";

const productRouter = express.Router();

productRouter.get('/', (req, res) => res.send('hello'));

export default productRouter ; 