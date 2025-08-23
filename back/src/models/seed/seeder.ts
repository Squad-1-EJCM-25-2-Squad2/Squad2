
import { PrismaClient } from "@prisma/client";
import { userSeeder } from "./userSeeder";
import { announceSeeder } from "./announceSeeder";
import { productSeeder } from "./productSeeder";

const prisma = new PrismaClient();

async function main() {
	await prisma.$connect();
	await userSeeder(prisma,20);
	await productSeeder(prisma,20);
	await announceSeeder(prisma,20);

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