import React from "react";
import useTasks from "../state/useTasks";

export default function ComponentB() {
  const [tasks, updateTasks] = useTasks();

  return (
    <div>
      {tasks.map(({ id, title }) => (
        <p key={id}>{title}</p>
      ))}
    </div>
  );
}
