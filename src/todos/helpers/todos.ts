'use server'
import { Todo } from "@prisma/client"

export const updateTodo = async(
    id: String, 
    complete: boolean): Promise<void> => {
    const body = { complete }
    const todoResponse = await fetch(`http://localhost:3000/api/seed/${id}`, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    console.log(todoResponse)
    return todoResponse

}

export const createTodo = async (
description: String
): Promise<void> => {
  const body = { description };
  const todoResponse = await fetch(`http://localhost:3000/api/seed`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  console.log(todoResponse);
  return todoResponse;
};

export const deleteTodo = async (): Promise<void> => {
  const todoResponse = await fetch(`http://localhost:3000/api/seed`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  console.log(todoResponse);
  return todoResponse;
};