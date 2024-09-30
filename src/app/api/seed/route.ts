import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";
import * as yup from "yup";

const prisma = new PrismaClient();

const postSchema = yup.object({
  description: yup.string().required(),
  complete: yup.boolean().optional().default(false),
});

export async function GET(request: Request) {
  const todos = await prisma.todo.findMany();

  return Response.json({ message: todos });
}

export async function POST(request: Request) {
  try {
    const body = await postSchema.validate(await request.json());

    const newTodo = await prisma.todo.create({
      data: body,
    });

    return Response.json({ message: newTodo });
  } catch (error) {
    return Response.json({ error, status: 400 });
  }
}

