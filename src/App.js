import React, { useState } from 'react';
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState(['todo 1', 'todo 2'])
  return (
    <>
      <TodoList todos={todos} />
      <input type="text" />
      <button>Add Todo</button>
      <button>Clear Completed</button>
      <div>0 left todo</div>
    </>
  )
}

export default App;
