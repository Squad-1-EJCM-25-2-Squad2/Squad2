import {PrismaClient} from "@prisma/client";
import { fakerPT_BR, faker } from "@faker-js/faker";
import auth from "../../config/auth";

export async function userSeeder(prisma:PrismaClient, numUser:number) {
    
    let users=[];

    for(let i=0; i<numUser;i++){
        let password=faker.internet.password();
        let { hash, salt } = auth.generatePassword(password);
        users.push({
            firstName:fakerPT_BR.person.firstName(),
            lastName:fakerPT_BR.person.lastName(),
            email:fakerPT_BR.internet.email(),
            gender:fakerPT_BR.person.gender(),
            cellphone: fakerPT_BR.phone.number(),
            birthDate: fakerPT_BR.date.birthdate(),
            hash:hash,
            salt:salt
        })
    }

    await prisma.user.createMany({
        data:users,
    })
}