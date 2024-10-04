import { PrismaClient } from "@prisma/client";
import { TodoGrid } from "@/todos/components/TodoGrid";
import { NewTodo } from "@/todos/components/NewTodo";

const prisma = new PrismaClient();

export const metadata = {
 title: 'Listado de todos',
 description: 'Listado de todos',
};

export default async function RestTodosPage() {

  const todos = await prisma.todo.findMany({orderBy: {description: 'asc'}})

  return (
    <div>
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo/>
      </div>
      <TodoGrid todos={todos} />
    </div>
  );
}