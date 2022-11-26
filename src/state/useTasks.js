import { createStore } from "@halka/state";

const initialState = [
  {
    id: 1,
    title: "sample task 1"
  },
  {
    id: 2,
    title: "sample task 2"
  },
  {
    id: 3,
    title: "sample task 3"
  }
];
export const useTasksState = createStore(initialState);

function updater() {
  return {
    add: (task) => useTasksState.set((prev) => [...prev, task]),
    remove: (id) =>
      useTasksState.set((prev) => prev.filter((task) => task.id !== id))
  };
}

export default function useTasks() {
  const tasks = useTasksState();
  const taskUpdater = updater();

  return [tasks, taskUpdater];
}
