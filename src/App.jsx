import React from 'react';

import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';

function App() {
  const [tasks, setTasks] = React.useState([
    {
      id: 1,
      text: 'Попробовать создать ToDo',
    },
    {
      id: 5,
      text: 'Сохранить задачи в массив стейта',
    },
  ]);

  return (
    <div className="App">
      <div className="todo">
        <h2>Список задач</h2>
        {tasks.map((obj) => (
          <TodoItem tasks={tasks} setTasks={setTasks} key={obj.id} text={obj.text} />
        ))}
        <TodoInput tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}

export default App;
