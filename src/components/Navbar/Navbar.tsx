import { RiTodoFill } from "react-icons/ri";

export default function Header() {
  return (
    <div className="w-full bg-primary text-primary-foreground p-5 border-b border-secondary">
      <a
        href="#"
        className="font-bold text-[1.5rem] flex items-center justify-center gap-2"
      >
        <RiTodoFill />
        <p>TODOS</p>
      </a>
    </div>
  );
}
