import {  Request, Response } from 'express';
import Product from '../../models/Product';



export const createProduct = async (
	req: Request,
	res: Response,

) => {
	const { name, description, price, stock_count  , image ,  category} = req.body;


	const product = Product.build({
        name,
        description,
        price,
        stock_count,
        image ,
        category,
	});

	await product.save();

	res.status(201).json(product);
};
