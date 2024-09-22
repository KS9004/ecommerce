
import { NextRequest } from "next/server";
import prisma from "@/prisma/db_client";


// GET: To get the data
export async function GET() {
    // fetching data from the database
   const products = await prisma.product.findMany()
    // return
    return Response.json(products);
}
// POST: To create the data

export async function POST(req: NextRequest) {
    const body = await req.json()
   const newProduct = await prisma.product.create({
        data:{
            title: body.title,
            price: body.price,
            description: body.description,
            category: body.category,
            image: body.image
        }
    })
    
    return Response.json(newProduct, { status: 201 });
}
// PUT : To update the data
// DELETE: To delte the data