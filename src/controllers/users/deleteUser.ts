import {  Request, Response } from 'express';
import User from '../../models/User';



export const deleteUser = async (
	req: Request,
	res: Response,

) => {
    
    try {
        await User.findByIdAndRemove(req.params.id);
       
        res.status(200).json('user deleted');
    } catch (error) {
        console.log(error)
        res.status(404).send(error)
    }


};
