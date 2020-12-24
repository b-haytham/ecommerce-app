import { Request, Response } from 'express';
import Category from '../../models/Category';


export const updateCategory = async (
    req: Request,
    res: Response,

) => {

    
    

    try {
        await Category.findByIdAndUpdate(req.params.id);
        res.status(200).json('Category updated');
    } catch (error) {
        console.log(error)
        res.status(404).send(error)
    }
   

}