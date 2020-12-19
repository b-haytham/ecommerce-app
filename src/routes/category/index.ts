

import express from "express";
import { createCategory } from "../../controllers/category/createcCategory";


const categoryRouter = express.Router();

categoryRouter.post('/', createCategory);

export default categoryRouter ; 