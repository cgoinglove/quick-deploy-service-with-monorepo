"use client";

import { type Todo } from "@repo/service";

import { Todo as TodoComponent } from "@repo/react-kit/todo";

type Props = {
  items: Todo[];
  deleteTodo: (id: Todo["id"]) => void;
  completeTodo: (id: Todo["id"]) => void;
};

export default function TodoList({ items, completeTodo, deleteTodo }: Props) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item) => (
        <TodoComponent
          key={item.id}
          onClick={item.complete ? undefined : completeTodo.bind(null, item.id)}
          onDeleteClick={deleteTodo.bind(null, item.id)}
          {...item}
        />
      ))}
    </div>
  );
}
