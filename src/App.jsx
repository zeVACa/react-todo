import React from 'react';

import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [tasks, setTasks] = React.useState([
    // {
    //   id: 1,
    //   text: 'Попробовать создать ToDo',
    // },
    // {
    //   id: 5,
    //   text: 'Сохранить задачи в массив стейта',
    // },
  ]);

  return (
    <div className="App">
      <div className="todo">
        <h2>Список задач</h2>
        <TodoList tasks={tasks} setTasks={setTasks} />
        <TodoInput tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}

export default App;
