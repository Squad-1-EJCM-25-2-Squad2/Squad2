
import { PrismaClient } from "@prisma/client";
import { userSeeder } from "./userSeeder";
import { productSeeder } from "./productSeeder";
import { announceSeeder } from "./announceSeeder";


const prisma = new PrismaClient();

async function main() {
	await prisma.$connect();
	userSeeder(prisma,20);
	productSeeder(prisma, 20);
	announceSeeder(prisma, 20);

}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e: any) => {
		console.log(e);
		await prisma.$disconnect();
		process.exit(1);
	});