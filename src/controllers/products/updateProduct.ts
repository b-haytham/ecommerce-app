import {  Request, Response } from 'express';
import Product from '../../models/Product';



export const updateProduct = async (
	req: Request,
	res: Response,

) => {
    try {
        await Product.findByIdAndUpdate(req.params.id);
        res.status(200).json('Product updated');
    } catch (error) {
        console.log(error)
        res.status(404).send(error)
    }
};