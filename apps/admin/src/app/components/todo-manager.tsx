"use client";

import { useArrayReducer } from "@repo/react-kit/hooks";
import { type Todo } from "@repo/service";
import TodoGenerator from "./todo-generator";
import TodoList from "./todo-list";
import { useEffect } from "react";

export default function TodoManager() {
  const [todoList, dispatch] = useArrayReducer<Todo[]>([]);

  const saveTodo = (content: string) => {
    fetch("/api/todo", {
      method: "POST",
      body: JSON.stringify({
        content,
      }),
    })
      .then((res) => res.json())
      .then(dispatch.push.bind(null));
  };

  const deleteTodo = (id: Todo["id"]) => {
    fetch(`/api/todo/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(dispatch.remove.bind(null, (todo) => todo.id == id));
  };

  const completeTodo = (id: Todo["id"]) => {
    fetch(`/api/todo/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then(
        dispatch.update.bind(
          null,
          (todo) => todo.id == id,
          (todo) => ({ ...todo, complete: true }),
        ),
      );
  };

  useEffect(() => {
    fetch("/api/todo")
      .then((res) => res.json())
      .then(dispatch.init);
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <TodoGenerator saveTodo={saveTodo} />
      <TodoList
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
        items={todoList}
      />
    </div>
  );
}
