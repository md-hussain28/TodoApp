import React, { useRef, useState } from 'react';
import { useTodoContext } from '../contexts/TodoContext';
import TodoTable from '../components/Table';

const Home = () => {
  const { createTodo } = useTodoContext();
  const [taskName, setTaskName] = useState('');
  const [priority, setPriority] = useState(1);
  const [deadline, setDeadline] = useState('');
  const [note, setNote] = useState('');
  const inputRef = useRef();

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Validate input fields (for simplicity, just checking taskName here)
    if (!taskName.trim()) {
      alert('Please enter a task name');
      return;
    }

    // Create new todo
    createTodo(priority, taskName, deadline, note);

    // Clear form fields
    setTaskName('');
    setPriority(1);
    setDeadline('');
    setNote('');

    // Clear input field reference
    inputRef.current.value = '';
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-green-800">
      <div className="sm:mt-44">
        <h1 className="text-4xl font-bold text-white">This is Home</h1>
      </div>

      <div className="mt-8 w-full max-w-lg">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="taskName">
              Task Name:
            </label>
            <input
              id="taskName"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter task name"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="priority">
              Priority:
            </label>
            <input
              id="priority"
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter priority (1-10)"
              value={priority}
              onChange={(e) => setPriority(Number(e.target.value))}
              min="1"
              max="10"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="deadline">
              Deadline:
            </label>
            <input
              id="deadline"
              type="datetime-local"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="note">
              Note:
            </label>
            <textarea
              id="note"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Task
          </button>
        </form>
      </div>

      <div className="mt-8">
        <TodoTable />
      </div>
    </div>
  );
};

export default Home;
