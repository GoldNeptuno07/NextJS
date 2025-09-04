import TodoSectionHeader from "@/components/TodoSectionHeader/TodoSectionHeader";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 px-5">
      <span
        className="text-left px-10 py-5 bg-primary text-primary-foreground 
                      border-b border-secondary rounded-t-lg space-y-3"
      >
        <h1 className="text-[2rem] font-bold">Welcome to TODOS</h1>
        <p className="font-semibold">Start by adding your TODOS.</p>
      </span>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* 'Completed' TODOS */}
        <TodoSectionHeader label="Completed" />
        {/* 'On Process' TODOS */}
        <TodoSectionHeader label="On Process" />
        {/* 'New' TODOS */}
        <TodoSectionHeader label="New" />
      </div>
    </div>
  );
}
