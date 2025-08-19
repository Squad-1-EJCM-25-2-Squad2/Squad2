import { Prisma, PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export class AnnounceController {
    public static async createAnnounce(request: Request, response: Response) {
        try {
            const { description, price, productName, categoryName, image } = request.body;

            const createInput: Prisma.AnnounceCreateInput = {
                description: description,
                price: price,
                product: {
                    connect: { name: productName }
                },
                category: {
                    connectOrCreate: {
                        where: {
                            name: categoryName
                        },
                        create: {
                            name: categoryName,
                        },
                    }
                },
                image: image
            }

            const createdAnnounce = await prisma.announce.create({
                data: createInput
            });

            response.status(201).json(createdAnnounce);
        } catch (error: any) {
            response.status(500).json({ message: error.message });
        }
    }

    public static async readAnnounce(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const integerId = parseInt(id);
            const foundAnnounce = await prisma.announce.findUnique({
                where: {
                    id: integerId
                },
            });

            if (!foundAnnounce) {
                return response.status(404).json({ message: "Anúncio não encontrado." });
            }

            response.status(200).json(foundAnnounce)
        } catch (error: any) {
            response.status(500).json({ message: error.message });
        }
    }

    public static async readAllAnnounces(request: Request, response: Response) {
        try {
            const foundAnnounces = await prisma.announce.findMany();
            response.status(200).json(foundAnnounces)
        } catch (error: any) {
            response.status(500).json({ message: error.message });
        }
    }

    public static async updateAnnounce(request: Request, response: Response) {
        try {
            const { id } = request.params
            const { description, price } = request.body;
            const integerId = parseInt(id)

            const createInput: Prisma.AnnounceUpdateInput = {
                description: description,
                price: price,
            }

            const updatedAnnounce = await prisma.announce.update({
                where: { id: integerId },
                data: createInput
            });

            response.status(200).json(updatedAnnounce);
        } catch (error: any) {
            response.status(500).json({ message: error.message });
        }
    }

    public static async deleteAnnounce(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const integerId = parseInt(id);

            await prisma.announce.delete({
                where: {
                    id: integerId
                },
            });

            response.status(204).send();
        } catch (error: any) {
            response.status(500).json({ message: error.message });
        }
    }

    public static async uploadAnnouncePhoto(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const integerId = parseInt(id);
            const file = request.file;

            const image = file ? `/uploads/photos/${file.filename}` : undefined
            if (!file) {
                return response.status(400).json({ message: "Nenhum arquivo de imagem foi enviado" })
            }

            const updatedAnnounce = await prisma.announce.update({
                where: {
                    id: integerId
                },
                data: {
                    image: image
                }
            });

            response.status(200).json(updatedAnnounce);
        } catch (error: any) {
            response.status(500).json({ message: error.message });
        }
    }
}
