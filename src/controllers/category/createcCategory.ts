import { Request, Response } from 'express';
import Category from '../../models/Category';



export const createCategory = async (
    req: Request,
    res: Response,

) => {
    const { name, description, image } = req.body;


    const category = Category.build({
        name,
        description,
        image,
    });

    await category.save();

    res.status(201).json(category);
};
