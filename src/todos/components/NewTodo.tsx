"use client";

import { Todo } from "@prisma/client";
import { FormEvent, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import * as ApiTodos from "@/todos/helpers/todos";
import { useRouter } from "next/navigation";

interface Props {
  todo: Todo;
}

export const NewTodo = ({todo}:Props) => {
  const router = useRouter();
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    ApiTodos.createTodo(description);
    setDescription("");
    router.refresh();
  };

  const deleteCompleted = () => {
    ApiTodos.deleteTodo();
    router.refresh();
  };
  return (
    <form onSubmit={handleSubmit} className="flex w-full">
      <input
        type="text"
        className="w-6/12 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
        placeholder="¿Qué necesita ser hecho?"
        onChange={({ target }) => setDescription(target.value)}
        value={description}
      />

      <button
        type="submit"
        className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all"
      >
        Crear
      </button>

      <span className="flex flex-1"></span>

      <button
        onClick={() => deleteCompleted()}
        type="button"
        className="flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all"
      >
        <IoTrashOutline />
        Delete
      </button>
    </form>
  );
};
