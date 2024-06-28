import React, { useState } from 'react';
import { useTodoContext } from '../contexts/TodoContext';

const TodoTable = ({ numRows }) => {
  const { todos, editTodo, doneTodo } = useTodoContext();
  const [selectedTodo, setSelectedTodo] = useState(null); // State to track selected todo for detailed view

  const handleToggleDone = (id) => {
    doneTodo(id);
  };

  const handleEdit = (id) => {
    // Placeholder function to handle edit (you can implement this based on your requirements)
    console.log(`Edit todo with id: ${id}`);
  };

  const handleRowClick = (todo) => {
    setSelectedTodo(todo); // Set selected todo for detailed view
  };

  const closeModal = () => {
    setSelectedTodo(null); // Close detailed view modal
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Serial Number</th>
            <th className="py-2 px-4 border-b">Priority</th>
            <th className="py-2 px-4 border-b">Task</th>
            <th className="py-2 px-4 border-b">Deadline</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.slice(0, numRows).map((todo, index) => (
            <tr key={todo.id} onClick={() => handleRowClick(todo)}>
              <td className="py-2 px-4 border-b">{index + 1}</td>
              <td className="py-2 px-4 border-b">{todo.priority}</td>
              <td className="py-2 px-4 border-b">{todo.taskName}</td>
              <td className="py-2 px-4 border-b">{new Date(todo.deadline).toLocaleString()}</td>
              <td className="py-2 px-4 border-b">{todo.isDone ? 'Done' : 'Pending'}</td>
              <td className="py-2 px-4 border-b">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => handleToggleDone(todo.id)}>
                  {todo.isDone ? 'Undo' : 'Mark Done'}
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleEdit(todo.id)}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Detailed View Modal */}
      {selectedTodo && (
        <div className="fixed inset-0 z-10 overflow-y-auto bg-gray-500 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-lg max-w-lg w-full">
            <h2 className="text-xl font-bold mb-4">{selectedTodo.taskName}</h2>
            <p><strong>Priority:</strong> {selectedTodo.priority}</p>
            <p><strong>Deadline:</strong> {new Date(selectedTodo.deadline).toLocaleString()}</p>
            <p><strong>Status:</strong> {selectedTodo.isDone ? 'Done' : 'Pending'}</p>
            <p><strong>Note:</strong> {selectedTodo.note}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoTable;

