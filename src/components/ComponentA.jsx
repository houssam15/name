import React from "react";
import { useSnackbar } from "notistack";
import useTasks from "../state/useTasks";
import { useConfirmationDialog } from "material-ui-confirmation";

export default function ComponentA() {
  const [tasks, updateTasks] = useTasks();
  const { enqueueSnackbar } = useSnackbar();
  const { getConfirmation } = useConfirmationDialog();

  console.log(tasks);

  function handleSubmit(e) {
    e.preventDefault();
    const title = e.target["new_task"].value;
    updateTasks.add({
      id: tasks.length + 1,
      title
    });
    enqueueSnackbar("Added task");
  }

  function handleDelete(id) {
    getConfirmation({
      title: "Delete",
      body: `Delete task with id ${id}`,
      onAccept: () => {
        updateTasks.remove(id);
        enqueueSnackbar(`Deleted task with id ${id}`);
      }
    });
  }

  return (
    <div>
      {tasks.map(({ id, title }) => (
        <p
          style={{ cursor: "pointer" }}
          onClick={() => handleDelete(id)}
          key={id}
        >
          {title}
        </p>
      ))}

      <form onSubmit={handleSubmit}>
        <input name="new_task" type="text" />
        <button>add</button>
      </form>
    </div>
  );
}
