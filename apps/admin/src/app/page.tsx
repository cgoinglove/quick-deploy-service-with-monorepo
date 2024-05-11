import TodoManager from "./components/todo-manager";

export default function Page() {
  return (
    <main className={TSS_LAYOUT}>
      <TodoManager />
    </main>
  );
}

const TSS_LAYOUT =
  "flex flex-col items-center justify-between min-h-screen p-24";
