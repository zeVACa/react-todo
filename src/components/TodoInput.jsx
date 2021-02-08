const TodoInput = ({ tasks, setTasks }) => {
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

      // if (tasks.length !== 0) {
      //   const sorderAllId = tasks.map((task) => task.id).sort((curr, next) => curr - next);
      //   let elemID;

      //   for (let i = 0; i < sorderAllId.length - 1; i++) {
      //     if (sorderAllId[i + 1] - sorderAllId[i] > 1) {
      //       elemID = sorderAllId[i] + 1;
      //       break;
      //     }

      //     elemID = sorderAllId[sorderAllId.length - 1] + 1;
      //   }

      //   setTasks((prevTasks) => {
      //     return [...prevTasks, { id: elemID, text: newTaskText }];
      //   });
      // } else {
      //   setTasks([{ id: 1, text: newTaskText }]);
      // }

      // не знаю как решить эту задачу декларативно только императивно
      // алгоритм может показаться запутанным, но при условии динамически изменямых данных,
      // есть гарантия, что айдишники будут уникальны и после удаления некоторых элементов
      // единственный трабл, который вижу, что при записи в БД обычно новые айтемы не занимают
      // место старых удалённых айдишников, тип БД продолжает индексировать по-своему
      // хотя мб в связке с бд логика будет совсем другая...
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
