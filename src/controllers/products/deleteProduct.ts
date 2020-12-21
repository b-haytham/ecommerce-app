import {  Request, Response } from 'express';
import Product from '../../models/Product';



export const deleteProduct = async (
	req: Request,
	res: Response,

) => {
    
    try {
        await Product.findByIdAndRemove(req.params.id);
        console.log(req.params.id)
        res.status(200).json('Product deleted');
    } catch (error) {
        console.log(error)
        res.status(404).send(error)
    }


};
