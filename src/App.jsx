import React from 'react';

import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [tasks, setTasks] = React.useState([]);

  let storage = JSON.parse(localStorage.getItem('tasks')) || []; // правильно ли я сделал, что вынес связку с локалстораджом на уровень компонента App а не в отдельных?

  React.useEffect(() => {
    if (storage.length > 0) {
      setTasks(storage);
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // console.log('storage: ', storage);

    console.log('hello from effect 2');
  }, [tasks.length]); // использовал length ткк, просто перезапись [] тригерит, ткк ссылка на объект другая

  setTimeout(() => {
    // setTasks([]);
  }, 2000);

  // if (storage.length !== 0) {
  // }

  // localStorage.setItem('tasks', JSON.stringify(tasks));
  // console.log('current local storage: ', localStorage.getItem('tasks'));

  // console.log(tasks);

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
