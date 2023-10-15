"use client";

import { Counter, path } from "@/store/Counter";
import { usePageState } from "nrstate-client";

export function AddButton() {
  console.log("AddButton (Client Component");

  const [pageState, setPageState] = usePageState<Counter>();
  const { count } = pageState;

  const onClick = () => {
    setPageState(
      {
        ...pageState,
        count: count + 1,
      },
      path
    );
  };

  return (
    <div className="border border-cyan-400 p-10">
      <h2 className="text-xl">Client Component1</h2>
      <div className="mt-10">
        <button
          onClick={onClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add
        </button>
      </div>
    </div>
  );
}
