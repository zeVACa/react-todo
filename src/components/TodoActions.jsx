const TodoActions = ({ key, tasks, setTasks }) => {
  const editTodoHandler = (event) => {
    const newText = prompt('Введите новый текст', '');

    // tasks.indexOf

    setTasks((prevTasks) => {
      prevTasks.filter((item) => {
        if (item.id === key) {
          // окей ли вообще перезаписывать полностью стейт? Мб можно было бы как-то обновить?
        }
      });

      // return [...prevTasks, ]
    });
  };

  const removeTodoHandler = (event) => {};

  return (
    <div className="todo-actions">
      <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 384">
        <path d="M0 304v80h80l236-236-80-80zM378 56L328 6c-8-8-22-8-30 0l-39 39 80 80 39-39c8-8 8-22 0-30z"></path>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96">
        <path d="M63 48l32-33v-2L83 1a2 2 0 00-2 0L48 33 15 1h-2L1 13v2l32 33L1 81v2l12 12a2 2 0 002 0l33-32 33 32a2 2 0 002 0l12-12v-2L63 48z"></path>
      </svg>
    </div>
  );
};

export default TodoActions;
