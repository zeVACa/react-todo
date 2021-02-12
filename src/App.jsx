import React from 'react';

import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [tasks, setTasks] = React.useState(JSON.parse(localStorage.getItem('tasks')) || []);
  const [activeCollor, setActiveCollor] = React.useState('grey');

  React.useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));

    console.log('hello from effect 2');
  }, [tasks]);

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
