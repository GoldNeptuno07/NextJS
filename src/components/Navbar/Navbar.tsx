import { ThemeToggle } from "@/components/ui/ThemeToggle";

import { RiTodoFill } from "react-icons/ri";

export default function NavBar() {
  return (
    <div className="flex justify-between bg-primary text-primary-foreground px-10 py-5 border-b border-secondary">
      <a
        href="#"
        className="font-bold text-[1.5rem] flex items-center justify-center gap-2"
      >
        <RiTodoFill />
        <p>TODOS</p>
      </a>
      <ThemeToggle />
    </div>
  );
}
