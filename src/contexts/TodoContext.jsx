import React, { createContext, useState, useContext } from "react";

// Initial Todos (with sample data for all fields)
const initialTodos = [
  { 
    id: 1, 
    priority: 5, 
    taskName: "Do the dishes", 
    isDone: false, 
    createdAt: new Date().toISOString(), 
    deadline: new Date(new Date().setDate(new Date().getDate() + 1)).toISOString(), 
    note: "Use the new soap"
  },
  { 
    id: 2, 
    priority: 7, 
    taskName: "Walk the dog", 
    isDone: true, 
    createdAt: new Date().toISOString(), 
    deadline: new Date(new Date().setDate(new Date().getDate() + 2)).toISOString(), 
    note: "Go to the park"
  },
  { 
    id: 3, 
    priority: 3, 
    taskName: "Go grocery shopping", 
    isDone: false, 
    createdAt: new Date().toISOString(), 
    deadline: new Date(new Date().setDate(new Date().getDate() + 3)).toISOString(), 
    note: "Buy fruits and veggies"
  }
];

// Create Context
const TodoContext = createContext({});

// Todo Provider Component
export const TodoProvider = ({ children }) => {
  
  const [todos, setTodos] = useState(initialTodos);

  // Function to generate a random unused id
  const generateRandomId = () => {
    let newId = Math.floor(Math.random() * 1000) + 1; 
    while (todos.some(todo => todo.id === newId)) {
      newId = Math.floor(Math.random() * 1000) + 1; 
    }
    return newId;
  };

  // Function to create a new todo
  const createTodo = (priority, taskName, deadline, note) => {
    const newTodo = {
      id: generateRandomId(),
      priority: priority,
      taskName: taskName,
      isDone: false,
      createdAt: new Date().toISOString(),
      deadline: new Date(deadline).toISOString(),
      note: note
    };
    setTodos([...todos, newTodo]);
  };

  // Function to edit an existing todo
  const editTodo = (id, newTodoData) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, ...newTodoData } : todo
      )
    );
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    setTodos(prevTodos =>
      prevTodos.filter(todo => todo.id !== id)
    );
  };

  // Function to mark a todo as done
  const doneTodo = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, isDone: true } : todo
      )
    );
  };

  // Pass state and functions as value to the context provider
  return (
    <TodoContext.Provider value={{ todos, createTodo, editTodo, deleteTodo, doneTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

// Custom hook to use the context
export const useTodoContext = () => useContext(TodoContext);
