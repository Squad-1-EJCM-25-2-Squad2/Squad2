import { PrismaClient } from "@prisma/client";
import { fakerPT_BR } from "@faker-js/faker"

export async function announceSeeder(prisma: PrismaClient, numAnnounces: number) {
    const productsWithoutAnnouncements = await prisma.product.findMany({
        where: {
            Announce: { none: {} },
        },
        select: { id: true },
    });

    if (productsWithoutAnnouncements.length === 0) {
        console.log("Todos os produtos já possuem um anúncio.");
        return;
    }

    const productsToSeed = productsWithoutAnnouncements.slice(0, numAnnounces);

    const categoryOptions = ['Tops', 'Bottoms', 'Dresses', 'Shoes', 'Accessories'];

    for (const product of productsToSeed) {
        const randomCategoryName = fakerPT_BR.helpers.arrayElement(categoryOptions);
        await prisma.announce.create({
            data: {
                description: fakerPT_BR.commerce.productDescription(),
                price: parseFloat(fakerPT_BR.commerce.price({ min: 50, max: 800 })),
                image: fakerPT_BR.image.urlLoremFlickr({ category: 'fashion' }),
                product: {
                    connect: { id: product.id }
                },
                category: {
                    connectOrCreate: {
                        where: { name: randomCategoryName },
                        create: { name: randomCategoryName },
                    }
                }
            }
        });
    }
}