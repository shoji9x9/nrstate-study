"use client";

import { Counter, path } from "@/store/Counter";
import { usePageState } from "nrstate-client";

export function ResetButton() {
  console.log("ResetButton (Client Component");

  const [pageState, setPageState] = usePageState<Counter>();
  const onClick = async (e: any) => {
    setPageState(
      {
        ...pageState,
        count: 0,
      },
      path
    );
  };

  return (
    <div className="border border-cyan-400 p-10">
      <h2 className="text-xl">Client Component2</h2>
      <div className="mt-10">
        <button
          onClick={onClick}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
