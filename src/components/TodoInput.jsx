const TodoInput = ({ tasks, setTasks }) => {
  const colors = ['grey', 'red', 'blue', 'orange', 'green'];

  const addTaskHandler = (event) => {
    if (event.key === 'Enter' && event.currentTarget.value !== '') {
      const newTaskText = event.currentTarget.value.replace(/\s+/g, ' ').trim(); // remoing multiple spaces like '    a    a   ';
      event.currentTarget.value = '';

      console.log('value: ', newTaskText);

      const allID = tasks.map((task) => task.id).sort((curr, next) => curr - next);
      let elemID;

      // не знаю как решить эту задачу декларативно только императивно
      // алгоритм может показаться запутанным, но при условии динамически изменямых данных,
      // есть гарантия, что айдишники будут уникальны и после удаления некоторых элементов
      // единственный трабл, который вижу, что при записи в БД обычно новые айтемы не занимают
      // место старых удалённых айдишников, тип БД продолжает индексировать по-своему
      // хотя мб в связке с бд логика будет совсем другая...
      for (let i = 0; i < allID.length - 1; i++) {
        if (allID[i + 1] - allID[i] > 1) {
          elemID = allID[i] + 1;
          break;
        }

        elemID = allID[allID.length - 1] + 1;
      }

      console.log('allID', allID);
      console.log('elemID', elemID);
      console.log('_____________');

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
