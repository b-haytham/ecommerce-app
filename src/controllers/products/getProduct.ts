import {  Request, Response } from 'express';
import Product from '../../models/Product';



export const getProduct = async (
	req: Request,
	res: Response,

) => {
	try {
        const product = await Product.find()
        res.json(product)
    } catch (error) {
        res.status(404).send(error)
    }
};

export const getProductID = async (
    req: Request,
	res: Response,

) => {
	try {
        const product = await Product.findById(req.params.id)
        res.json(product)
    } catch (error) {
        res.status(404).send(error)
    }
};