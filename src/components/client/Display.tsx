"use client";

import { Counter } from "@/store/Counter";
import { usePageState } from "nrstate-client";

export function Display() {
  console.log("Display (Client Component)");
  const [pageState, setPageState] = usePageState<Counter>();
  const { count } = pageState;
  return (
    <div className="border border-cyan-400 p-10">
      <h2 className="text-xl">Client Component3</h2>
      <div className="mt-10">Count: {count}</div>
    </div>
  );
}
