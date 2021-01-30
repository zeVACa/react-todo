const TodoInput = ({ tasks, setTasks }) => {
  const colors = ['grey', 'red', 'blue', 'orange', 'green'];

  const addTaskHandler = (event) => {
    if (event.key === 'Enter' && event.currentTarget.value !== '') {
      const newTaskText = event.currentTarget.value.replace(/\s+/g, ' ').trim(); // remoing multiple spaces like '    a    a   ';
      event.currentTarget.value = '';

      const allID = tasks.map((task) => task.id);
      let elemID;

      for (let i = 1; i < allID.length + 1; i++) {
        if (!allID.includes(i)) {
          elemID = i;
          break;
        }
      }

      console.log(allID);
      console.log(elemID);

      setTasks((prevTasks) => {
        return [...prevTasks, { id: elemID, text: newTaskText }];
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
