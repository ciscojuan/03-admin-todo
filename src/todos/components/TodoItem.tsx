'use client'
import { Todo } from "@prisma/client";
import Styles from "./todoItem.module.css";
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";
interface Props {
  todo: Todo;
  toggleTodo: (id: String, complete: Boolean) => Promise<Todo|void>;
}

export const TodoItem = ({ todo, toggleTodo }: Props) => {
  return (
    <div className={todo.complete ? Styles.todoDone : Styles.todoPending}>
      <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
        <div
          className={`flex rounded p-2 cursor-pointer hover:bg-opacity-60 ${
            todo.complete ? "bg-blue-100" : "bg-red-100"
          }`}
          onClick={() => toggleTodo(todo.id, !todo.complete)}
        >
          {todo.complete ? (
            <IoCheckboxOutline size={30} />
          ) : (
            <IoSquareOutline size={30} />
          )}
        </div>

        <div className="text-center sm:text-lef">{`${todo.description}`}</div>
      </div>
    </div>
  );
};
