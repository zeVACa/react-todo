import React from 'react';

import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [tasks, setTasks] = React.useState([
    // {
    //   id: 1,
    //   text: 'Попробовать создать ToDo',
    //   isActive: false,
    // },
    // {
    //   id: 5,
    //   text: 'Сохранить задачи в массив стейта',
    //   isActive: false,
    // },
  ]);

  console.log(tasks);

  const [activeCollor, setActiveCollor] = React.useState('grey');

  return (
    <div className="App">
      <div className="todo">
        <h2>Список задач</h2>
        <TodoList tasks={tasks} setTasks={setTasks} color={activeCollor} />
        <TodoInput
          activeCollor={activeCollor}
          setActiveCollor={setActiveCollor}
          tasks={tasks}
          setTasks={setTasks}
        />
      </div>
    </div>
  );
}

export default App;
