import { Prisma, PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import auth from "../config/auth";

const prisma = new PrismaClient();

export class UserController{

    public static async createUser(request: Request, response: Response){
        try{
            const {firstName,lastName,email,password} = request.body
            const { hash, salt } = auth.generatePassword(password);
            
            
            const createInput:Prisma.UserCreateInput ={
                firstName:firstName,
                lastName:lastName,
                email:email,
                hash:hash,
                salt:salt,
            }

            const createdUser = await prisma.user.create({
                data: createInput,
            });

            const token = auth.generateJWT(createdUser);
            const { hash:_hash, salt:_salt, ...userData } = createdUser;

            const fullInformation ={
                token,
                userData
            }
            response.status(201).json(fullInformation);
            
        }
        catch(erro: any){
            response.status(500).json({message: erro.message });
        }
    }

    public static async updateUser(request: Request, response: Response){
        try{
            const {id} =request.params;
            const {firstName, lastName,gender,cellphone,birthDate,email} =request.body;
            
            const integerId=parseInt(id);

            if (request.user !== integerId) 
                return response.status(403).json({ message: "Access denied" });


            const createInput: Prisma.UserUpdateInput = {
                firstName:firstName,
                lastName:lastName,
                email:email,
                cellphone:cellphone,
                gender: gender,
                birthDate: birthDate
			};
            const updatedUser = await prisma.user.update({
				data: createInput,
				where: {
					id: integerId,
				},
			});

            if (!updatedUser) 
			    return response.status(404).json({ message: "User not found" });

            const { hash, salt, ...userData } = updatedUser;
			response.status(201).json(userData);
            
        }
        catch(erro:any){
			response.status(500).json({ message: erro.message });
        }
        
    }
    public static async deleteUser(request: Request, response: Response) {
        try {
            const { id } = request.params;
            
            const integerId=parseInt(id);

            if (request.user !== integerId) 
                return response.status(403).json({ message: "Access denied" });


            const deletedUser = await prisma.user.delete ({
                where: {
                    id: integerId,
                },
            });

            response.status(204).json(deletedUser);
        } 
        catch (erro: any) {

            response.status(500).json({ message: erro.message });
        }
    }
    public static async readUser(request: Request, response: Response){
        try {
			const { id } = request.params;

            const integerId=parseInt(id);

            if (request.user !== integerId) 
                return response.status(403).json({ message: "Access denied" });

            const foundUser = await prisma.user.findUnique ({
                where:{
                    id: integerId
                }
            });
            
		if (!foundUser) 
			return response.status(404).json({ message: "User não found" });

        const { hash, salt, ...userData } = foundUser;
		response.status(200).json(userData);

		} 
        catch (erro: any) {
			response.status(500).json({ message: erro.message });
		}
    }
    

    public static async login(request: Request, response: Response){
        try{const {email,password}=request.body;
        
        const foundUser = await prisma.user.findUnique({
            where:{
                email:email
            }
        })

		if (!foundUser) 
            return response.status(404).json({ message: "User não found" });

        if(!auth.checkPassword(password,foundUser.hash,foundUser.salt))
			return response.status(404).json({ message: "incorrect email or password" });

        const token = auth.generateJWT(foundUser);
        response.status(201).json(token);

        }
        catch(erro:any){
            response.status(500).json({ message: erro.message }); 
        }
    }
}