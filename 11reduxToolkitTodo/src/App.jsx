import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-600">
      <div className="w-6/12">
        <h1 className="text-center mb-4">Learn Redux Toolkit</h1>
        <AddTodo />
        <Todo />
      </div>
    </div>
  );
}

export default App;
