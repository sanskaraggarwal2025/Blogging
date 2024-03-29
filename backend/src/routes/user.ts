import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import { signinInput, signupInput } from "@sanskar2025/common";

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    }
}>();

userRouter.post('/signup', async (c) => {
    const body = await c.req.json();
    const { success } = signupInput.safeParse(body);
    if (!success) {
        c.status(403);
        return c.json({
            error: "invalid input"
        })
    }
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const user = await prisma.user.create({
        data: {
            email: body.email,
            password: body.password,
            name:body.name
        },
    })

    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    console.log(token);

    return c.json({
        jwt: token
    })
})


userRouter.post('/signin', async (c) => {
    const body = await c.req.json();
    const { success } = signupInput.safeParse(body);
    if (!success) {
        c.status(403);
        return c.json({
            error: "invalid input"
        })
    }
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const isUser = await prisma.user.findUnique({
        where: {
            email: body.email,
            password: body.password
        }
    })

    console.log(isUser?.id);

    if (!isUser) {
        c.status(403);
        return c.json({
            error: "user not found",
        })
    }

    const token = await sign({ id: isUser.id }, c.env.JWT_SECRET);
    return c.json({
        jwt: token
    })
})
userRouter.delete('/:id', async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const id = c.req.param('id');
    const user = await prisma.user.delete({
        where:{
            id:id
        }
    })
    return c.json({ post: user });
})