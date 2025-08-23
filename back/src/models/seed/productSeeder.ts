productSeeder

import { PrismaClient } from "@prisma/client";
import { fakerPT_BR } from "@faker-js/faker"
import { json } from "zod";

export async function productSeeder(prisma: PrismaClient, numProducts: number) {
    const sexOptions = ['Masculino', 'Feminino', 'Indefinido'];
    const sizeOptions = ['XS', 'S', 'M', 'L', 'XL',
         '6', '7', '8', '9', '10',
          '11', '28', '30', '32',
           '34', '36'
        ]

    const sizeObjects = sizeOptions.map((size) => ({
        id: size
    }));

    await prisma.size.createMany({
        data:sizeObjects,
        skipDuplicates: true,
    });

    for (let i = 0; i < numProducts; i++) {
        await prisma.product.create({
            data:{
                name: fakerPT_BR.commerce.product(),
                quantity: fakerPT_BR.number.int({ min: 0, max: 200 }),
                color: fakerPT_BR.color.human(),
                sexModel: fakerPT_BR.helpers.arrayElement(sexOptions),
                size:{
                    connect:{id:fakerPT_BR.helpers.arrayElement(sizeOptions)}
                } ,
            }

        });
    }

}

