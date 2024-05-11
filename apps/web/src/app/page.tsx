import { Todo } from "@repo/react-kit/todo";
import { inject, TodoService } from "@repo/service";

export const revalidate = 10;

export default async function Page() {
  const todoService = inject(TodoService);

  const list = await todoService.findAll();

  return (
    <main className={TSS_LAYOUT}>
      <h1 className={TSS_TITLE}>Todo Read Only App</h1>
      <div className={TSS_TODO_WRAP}>
        {list.map((todo) => (
          <Todo {...todo} key={todo.id} />
        ))}
      </div>
    </main>
  );
}

const TSS_LAYOUT = "flex flex-col items-center min-h-screen p-24";
const TSS_TITLE = "text-3xl font-bold  p-8";
const TSS_TODO_WRAP = "flex flex-col items-center  gap-3 w-full";
