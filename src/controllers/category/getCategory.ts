import { Request, Response } from 'express';
import Category from '../../models/Category';

export const getCategory = async (
    req: Request,
    res: Response,

) => {

    

    try {
        const category = await Category.find()
        res.json(category)
    } catch (error) {
        res.status(404).send(error)
    }
   

}