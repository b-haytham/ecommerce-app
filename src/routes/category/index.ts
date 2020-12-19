import express from "express";

const categoryRouter = express.Router();

categoryRouter.post('/', create);

export default categoryRouter ; 