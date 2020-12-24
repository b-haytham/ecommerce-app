

import express from "express";
import { createCategory } from "../../controllers/category/createcCategory";
import { deleteCategory } from "../../controllers/category/deleteCategory";
import { getCategory } from "../../controllers/category/getCategory";
import { updateCategory } from "../../controllers/category/updateCategory";


const categoryRouter = express.Router();

categoryRouter.post('/', createCategory);
categoryRouter.get('/', getCategory);
categoryRouter.delete('/:id' , deleteCategory);
categoryRouter.put('/', updateCategory);

export default categoryRouter ; 