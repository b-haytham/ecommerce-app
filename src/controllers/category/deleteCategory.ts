import { Request, Response } from 'express';
import Category from '../../models/Category';

export const deleteCategory = async (
    req: Request,
    res: Response,

) => {

    
    

    try {
        await Category.findByIdAndRemove(req.params.id);
        res.status(200).json('Category deleted');
    } catch (error) {
        console.log(error)
        res.status(404).send(error)
    }
   

}