import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";
import * as yup from "yup";

const prisma = new PrismaClient();

interface Segments {
  params: {
    id: string;
  };
}

const putSchema = yup.object({
  description: yup.string().optional(),
  complete: yup.boolean().optional(),
});

export async function GET(request: Request, { params }: Segments) {
  const id = params.id;
  const todo = await prisma.todo.findFirst({ where: { id: id } });

  if (!todo) {
    return NextResponse.json({ error: "Todo not found" }, { status: 404 });
  }
  return NextResponse.json({ todo: todo });
}

export async function PUT(request: Request, { params }: Segments) {
  try {
    const { id } = params;

    const todo = await prisma.todo.findFirst({ where: { id: id } });

    if (!todo)
      return NextResponse.json({ error: "Todo not found" }, { status: 404 });

    const { complete, description } = await putSchema.validate(
      await request.json()
    );

    const updateTodo = await prisma.todo.update({
      where: { id: id },
      data: { complete, description },
    });

    return NextResponse.json({ todo: updateTodo });
  } catch (error) {
    return NextResponse.json({ error, status: 400 });
  }
}

