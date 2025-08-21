import { Request,Response,NextFunction } from "express"

import z from "zod"

export function validateBody<T>(schema:z.ZodSchema<T>){
    return(request: Request, response: Response, next:NextFunction )=>{
        const validate = schema.safeParse(request.body)

        if(validate.error){
            response.status(400).json({errors:z.treeifyError(validate.error)});
            return;
        }
        next();
    }
}

export function validateParams<T>(schema:z.ZodSchema<T>){
    return(request: Request, response: Response, next:NextFunction )=>{
        const validate = schema.safeParse(request.params)

        if(validate.error){
            response.status(400).json({errors:z.treeifyError(validate.error)});
            return;
        }
        next();
    }
}