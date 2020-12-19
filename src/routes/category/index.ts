
import { createCategory } from '../../controllers/category/createcCategory';
import express from "express";

const categoryRouter = express.Router();

categoryRouter.post('/', createCategory);

export default categoryRouter ; 