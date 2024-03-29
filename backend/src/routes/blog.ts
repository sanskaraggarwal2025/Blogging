import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";
import { createBlogInput,upadateBlogInput } from "@sanskar2025/common";
import { format } from "date-fns";
export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    },
    Variables: {
        userId: string
    }
}>();

blogRouter.use('/*', async (c, next) => {
    const jwt = c.req.header('authorization')
    if (!jwt) {
        c.status(403);
        return c.json({
            error: "unauthorized"
        })
    }

    const token = jwt.split(' ')[1];
    const payload = await verify(token, c.env.JWT_SECRET);
    if (!payload) {
        c.status(401);
        return c.json({
            error: "unauthorized"
        })
    }

    c.set('userId', payload.id);
    await next();

})

blogRouter.post('/', async (c) => { 
    const body = await c.req.json();
    const {success} = createBlogInput.safeParse(body);
    if(!success){
        c.status(403);
        return c.json({
            error:"invalid input"
        })
    }
    const userId = c.get('userId')
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const currentDate = new Date();
    const formattedDate = format(currentDate, 'd MMMM yyyy');

    const post = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            createdAt:formattedDate,
            authorId: userId
        }
    })

    return c.json({
        post: post.id
    })
})

blogRouter.put('/', async (c) => {
    const body = await c.req.json();
    const {success} = upadateBlogInput.safeParse(body);
    if(!success){
        c.status(403);
        return c.json({
            error:"invalid input"
        })
    }
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const userId = c.get('userId');

    await prisma.post.update({
        where: {
            id: body.id,
            authorId: userId
        },
        data: {
            title: body.title,
            content: body.content
        }
    })


    return c.text("post updated")
})

blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blogs = await prisma.post.findMany({
        select:{
            content:true,
            title:true,
            id:true,
            createdAt:true,
            author:{
                select:{
                    name:true,
                }
            }
        }
    });

    return c.json({
        blogs
    })
})

blogRouter.get('/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const id = c.req.param('id');

    const blog = await prisma.post.findUnique({
        where: {
            id: id
        },
        select:{
            id:true,
            title:true,
            content:true,
            createdAt:true,
            author:{
                select:{
                    name:true
                }
            }
        }
    })
    return c.json({ post: blog });
})
blogRouter.delete('/:id', async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const id = c.req.param('id');
    const blog = await prisma.post.delete({
        where:{
            id:id
        }
    })
    return c.json({ post: blog });
})
