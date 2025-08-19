import { Prisma, PrismaClient } from "@prisma/client";
import {  Request, Response } from "express";

const prisma = new PrismaClient();


export class FavoritesController{

    public static async addFavorite(request:Request, response: Response){
        try{
            const {userId, announceId} = request.body;

            const integerUserId = parseInt(userId);
            const integerAnnounceId = parseInt(announceId);

            const createInput:Prisma.FavoritesCreateInput={
                User:{
                    connect:{
                        id:integerUserId
                    }
                },
                Announce:{
                    connect:{
                        id: integerAnnounceId
                    }
                }
            }

            const cretaedFavorite = await prisma.favorites.create({
                data:createInput
            })

            response.status(201).json(cretaedFavorite);
        }
        catch(erro:any){
            response.status(500).json({message: erro.message });
        }
    }

    public static async removeFavorite(request:Request, response: Response){
        try{
            const {id} = request.params
            const integerId:number =parseInt(id);

            const deletedFavorite = await prisma.favorites.delete({
                where:{
                    id: integerId
                }
            });

            response.status(204).json(deletedFavorite);
        }
        catch(erro:any){
            response.status(500).json({ message: erro.message });
        }
    }

        public static async removeAllFavorites(request:Request, response: Response){
        try{
            const {userId} = request.params;
            const intergerUserId = parseInt(userId);

            const deleteFavorites = await prisma.favorites.deleteMany({
                where:{
                    userId:intergerUserId
                }
            });

            if(deleteFavorites.count==0)
                return response.status(404).json({message:"there is no favorite in your account"});

            return response.status(200).json(deleteFavorites);
        }
        catch(erro:any){
            response.status(500).json({ message: erro.message });
        }
    }

    public static async readAllFavorites(request:Request, response: Response){
        try{
            const {userId} = request.params;
            const intergerUserId = parseInt(userId);

            const foundFavorites = await prisma.favorites.findMany({
                where:{
                    userId:intergerUserId
                }
            });

            if(foundFavorites[0]==null)
                return response.status(404).json({message:"there is no favorite in your account"});

            let announceIds = foundFavorites.map(foundFavorites=>foundFavorites.announceId!)
        
            const getAnnounce = await prisma.announce.findMany({
                where:{
                    id:{
                        in: announceIds
                    }
                }
            })
            return response.status(200).json(getAnnounce);
        }
        catch(erro:any){
            response.status(500).json({ message: erro.message });
        }
    }
}