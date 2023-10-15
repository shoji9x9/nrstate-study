import { Counter, initialCounter, path } from "@/store/Counter";
import { getPageState } from "nrstate";

export function SideMenu() {
  console.log("SideMenu (Server Component)");

  const pageState = getPageState<Counter>(initialCounter, path);
  const { count } = pageState;

  return (
    <div className="border border-pink-400 p-10">
      <h2 className="text-xl">Server Component1</h2>
      <div className="mt-10">Count: {count}</div>
    </div>
  );
}
