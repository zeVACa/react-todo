import TodoActions from './TodoActions';

function TodoItem({ id, setTasks, text }) {
  return (
    <div className="todo-item" data-todo-id={id}>
      <div className="todo-checkbox">
        <label htmlFor={`todo-${id}`}>
          <input type="checkbox" id={`todo-${id}`} />
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M505 75a26 26 0 00-37 0L162 382 44 264a26 26 0 00-37 37l136 136c10 10 27 9 37 0l325-325c10-10 9-27 0-37z"></path>
            </svg>
          </div>
        </label>
      </div>
      <div className="todo-delimiter"></div>
      <p className="todo-text">{text}</p>
      <TodoActions id={id} setTasks={setTasks} />
    </div>
  );
}

export default TodoItem;
