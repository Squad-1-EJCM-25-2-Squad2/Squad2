import {PrismaClient} from "@prisma/client"
import { Request,Response } from "express";

const prisma = new PrismaClient();

export class ProductController{

    public static async createProduct(request:Request, response:Response){
        try{
            const {name, quantity, color, sexModel, sizeId} = request.body;
            const createdProduct = await prisma.product.create({
                data:{
                name,
                quantity,
                color,
                sexModel,
                sizeId
        },
        });
        response.status(201).json(createdProduct);

        }catch(error:any){
            response.status(500).json({message: error.message});
        }    
    }

    public static async readProduct(request:Request, response:Response){
        try{
            const {productId} = request.body;
            const foundProduct = await prisma.product.findUnique({
                where:{
                    id:productId,
                },
            });
            response.status(201).json(foundProduct);
        }catch(error:any){
            response.status(500).json({message: error.message});
        }  
    }

    public static async readAllProducts(request:Request, response:Response){
        try{
            const foundProduct = await prisma.product.findMany();
            response.status(201).json(foundProduct);

        }catch(error:any){
            response.status(500).json({message: error.message});
        }
    }


    public static async updateProduct(request:Request, response:Response){
        try{
            const {id,name, quantity, color, sexModel, sizeId} = request.body;
            const updatedProduct = await prisma.product.update({
                data:{
                    name,
                    quantity,
                    color,
                    sexModel,
                    sizeId
                },
                where:{
                    id:id
                },
            });
            response.status(201).json(updatedProduct);
        }catch(error:any){
            response.status(500).json({message: error.message});
        }  
    }

    public static async deleteProduct(request:Request, response:Response){
        try{
            const {productId}=request.body;
            const deletedProduct = await prisma.product.delete({
                where:{
                    id:productId
                },
            });
            response.status(200).json(deletedProduct);
        }catch(error:any){
            response.status(500).json({message: error.message});
        }  
    }

    
}