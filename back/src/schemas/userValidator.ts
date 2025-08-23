import z from "zod";

const user = z.object({
    firstName:z.string().min(5,"minimun 5 characters").max(30,"max 30 characters "),
    lastName:z.string().min(5,"minimun 5 characters").max(30,"max 30 characters"),
    email:z.email(),
    password:z.string().min(5,"minimun 5 characters")
        .refine((value)=>/\d/.test(value),{message:"password must contain at least one number"})
        .refine((value)=>/[A-Z]/.test(value),{message:"password must contain at least one upercase letter"})
        .refine((value)=>/[a-z]/.test(value),{message:"password must contain at least one lowercase letter"})
        .refine((value)=>/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value),{message:"password must contain one special digit"}),
    gender:z.string().min(5,"minimun 5 characters"),
    cellphone:z.string().min(7,"minimun 7 characters").max(15,"max 15 characters"),
    birthDate: z.date(),
});


const createUser = user.omit({
    gender:true,
    cellphone:true,
    birthDate:true
})

const updateUser = user.partial().omit({
    password:true
});

const userId = z.object({
    id: z.preprocess((val)=>Number(val),z.number().min(0)),
})

export default{
    createUser,
    updateUser,
    userId
}