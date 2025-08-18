import { PrismaClient } from "@prisma/client";
import { fakerPT_BR } from "@faker-js/faker"

export async function productSeeder(prisma: PrismaClient, numProducts: number) {
    const products = [];
    const sexOptions = ['Masculino', 'Feminino', 'Indefinido'];
    const sizeOptions = ['XS', 'S', 'M', 'L', 'XL',
         '6', '7', '8', '9', '10',
          '11', '28', '30', '32',
           '34', '36'
        ]

    for (let i = 0; i < numProducts; i++) {
        products.push({
            name: fakerPT_BR.commerce.product(),
            quantity: fakerPT_BR.number.int({ min: 0, max: 200 }),
            color: fakerPT_BR.color(),
            sexModel: fakerPT_BR.helpers.arrayElement(sexOptions),
            size: fakerPT_BR.helpers.arrayElement(sizeOptions),
        });
    }

    await prisma.product.createMany({
        data: products,
        skipDuplicates: true,
    });

}