import React from 'react';
import TodoActions from './TodoActions';

function TodoItem({ id, setTasks, text, color, isCompleted }) {
  function checkboxHandler() {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === id) {
          return { id: id, text: task.text, color: color, isCompleted: !task.isCompleted };
        } else {
          return task;
        }
      });
    });
  }

  return (
    <div className="todo-item">
      <div className="todo-checkbox">
        <label htmlFor={`todo-${id}`}>
          <input type="checkbox" id={`todo-${id}`} />
          <div onClick={checkboxHandler}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M505 75a26 26 0 00-37 0L162 382 44 264a26 26 0 00-37 37l136 136c10 10 27 9 37 0l325-325c10-10 9-27 0-37z"></path>
            </svg>
          </div>
        </label>
      </div>
      <div className={`todo-delimiter ${color}`}></div>
      <p
        className="todo-text"
        style={
          isCompleted
            ? { textDecoration: 'line-through', color: '#c5c5c5' }
            : { textDecoration: 'none' }
        }>
        {text}
      </p>
      <TodoActions id={id} setTasks={setTasks} prevText={text} color={color} />
    </div>
  );
}

export default TodoItem;
