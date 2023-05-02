import { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { addTask } from '../features/tasks-slice';

const CreateTask = () => {
  const [newTaskTitle, setnewTaskTitle] = useState('');
  const dispatchFn = useDispatch();

  return (
    <form
      className="create-task"
      onSubmit={(e) => {
        e.preventDefault();
        dispatchFn(addTask({ title: newTaskTitle }));
      }}
    >
      <label htmlFor="new-task-title">
        Title
        <input
          id="new-task-title"
          type="text"
          value={newTaskTitle}
          placeholder="Title"
          required
          onChange={(e) => setnewTaskTitle(e.target.value)}
        />
      </label>
      <button type="submit">Create Task</button>
    </form>
  );
};

export default CreateTask;
