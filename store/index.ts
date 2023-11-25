import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

//redux devtools work
const store = (set: any) => ({
  tasks: [],
  addTasks: (name: string, status: number) =>
    set((state: any) => ({ tasks: [...state.tasks, { name, status }] }))
});

export const useZustandStore = create(
  persist(devtools(store), { name: "store" })
);
