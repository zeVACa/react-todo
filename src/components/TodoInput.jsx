const TodoInput = ({ setTasks }) => {
  const colors = ['grey', 'red', 'blue', 'orange', 'green'];

  const addTaskHandler = (event) => {
    if (event.key === 'Enter' && event.currentTarget.value !== '') {
      const newTaskText = event.currentTarget.value.replace(/\s+/g, ' ').trim(); // remoing multiple spaces like '    a    a   ';
      event.currentTarget.value = '';

      setTasks((prevTasks) => {
        console.log('------');
        if (prevTasks.length == 0) {
          return [...prevTasks, { id: 1, text: newTaskText }];
        } else {
          return [...prevTasks, { id: prevTasks[prevTasks.length - 1].id + 1, text: newTaskText }];
        }
      });
    }
  };

  return (
    <div className="todo-input">
      <input onKeyDown={addTaskHandler} type="text" placeholder="Текст задачи..." />
      <ul>
        {colors.map((color) => (
          <li className={`todo-color ${color}`}></li>
        ))}
      </ul>
    </div>
  );
};

export default TodoInput;
