import React, { useEffect, useState } from 'react';

export default function ToDo() {
  const [tasks, setTask] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const storedTask = localStorage.getItem('tasks');
    if (storedTask) {
      setTask(JSON.parse(storedTask));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handelForm = event => {
    event.preventDefault();
    addTask();
  };
  const addTask = () => {
    if (input.trim() === '') return;
    const newTask = {
      id: Date.now(),
      text: input,
      complete: false,
      time: new Date().toLocaleString('en-BD', {
        day: '2-digit',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
      }),
    };
    setTask([...tasks, newTask]);
    setInput('');
  };

  const deleteTask = id => {
    const update = tasks.filter(task => task.id != id);
    setTask(update);
  };

  const toggleComplete = id => {
    const update = tasks.map(task => {
      if (task.id === id) {
        return { ...task, complete: !task.complete };
      }
      return task;
    });
    setTask(update);
  };

  const activeTask = tasks.filter(task => !task.complete);
  const completeTasks = tasks.filter(task => task.complete);

  // console.log(tasks);
  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
      <h1>ToDo</h1>
      <form onSubmit={handelForm} action="">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          name=""
          id=""
          placeholder="Add your task"
        />
        <button type="submit">Add</button>
      </form>
      <h2>Active Tasks</h2>
      {activeTask.map(task => (
        <div key={task.id}>
          <span>{task.text}</span>
          <small>({task.time})</small>
          <button onClick={() => toggleComplete(task.id)}>Ok</button>
          <button onClick={() => deleteTask(task.id)}>X</button>
        </div>
      ))}
      <h2>Complete Tasks</h2>
      {completeTasks.map(task => (
        <div key={task.id}>
          <span style={{ textDecoration: 'line-through' }}>{task.text}</span>
          <button onClick={() => toggleComplete(task.id)}>T</button>
          <button onClick={() => deleteTask(task.id)}>X</button>
        </div>
      ))}
    </div>
  );
}
