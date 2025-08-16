import {PrismaClient,Prisma} from "@prisma/client"
import { create } from "domain";
import { Request,Response } from "express";
import { connect } from "http2";

const prisma = new PrismaClient();

export class ProductController{

    public static async createProduct(request:Request, response:Response){
        try{
            const {name, quantity, color, sexModel, sizeId} = request.body;
            const createInput:Prisma.ProductCreateInput={
                name:name,
                quantity:quantity,
                color:color,
                size:{
                    connectOrCreate:{
                        where:{
                            id:sizeId
                        },
                        create:{
                            id:sizeId,
                        },
                    }
                }
            }
            if (sexModel !== undefined){
             createInput.sexModel = sexModel;
            }

            const createdProduct = await prisma.product.create({
                data:createInput
        });
        response.status(201).json(createdProduct);

        }catch(error:any){
            response.status(500).json({message: error.message});
        }    
    }

    public static async readProduct(request:Request, response:Response){
        try{
            const {id} = request.params;
            const integerId = parseInt(id);
            const foundProduct = await prisma.product.findUnique({
                where:{
                    id:integerId,
                },
            });
            response.status(200).json(foundProduct);
        }catch(error:any){
            response.status(500).json({message: error.message});
        }  
    }

    public static async readAllProducts(request:Request, response:Response){
        try{
            const foundProduct = await prisma.product.findMany();
            response.status(200).json(foundProduct);

        }catch(error:any){
            response.status(500).json({message: error.message});
        }
    }


    public static async updateProduct(request:Request, response:Response){
        try{
            const { name, quantity, color, sexModel, sizeId} = request.body;
            const {id} = request.params;
            const integerId = parseInt(id);
            const createInput:Prisma.ProductUpdateInput={
                name:name,
                quantity:quantity,
                color:color,
                size:{
                    connectOrCreate:{
                        where:{
                            id:sizeId
                        },
                        create:{
                            id:sizeId,
                        },
                    }
                }
            };
            if(sexModel !== undefined){
                createInput.sexModel = sexModel;
            }
            const updatedProduct = await prisma.product.update({
                data:createInput,
                where:{
                    id:integerId
                },
            });
            response.status(200).json(updatedProduct);
        }catch(error:any){
            response.status(500).json({message: error.message});
        }  
    }

    public static async deleteProduct(request:Request, response:Response){
        try{
            const {id}=request.params;
            const integerId = parseInt(id);
            const deletedProduct = await prisma.product.delete({
                where:{
                    id:integerId
                },
            });
            response.status(204).json(deletedProduct);
            
        }catch(error:any){
            response.status(500).json({message: error.message});
        }  
    }

    
}