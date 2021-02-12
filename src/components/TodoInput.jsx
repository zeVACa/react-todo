import React from 'react';

const TodoInput = ({ setTasks, activeCollor, setActiveCollor }) => {
  const colors = ['grey', 'blue', 'green', 'orange', 'red'];

  const addTaskHandler = (event) => {
    if (event.key === 'Enter' && event.currentTarget.value.trim() !== '') {
      const newTaskText = event.currentTarget.value.replace(/\s+/g, ' ').trim(); // remoing multiple spaces like '    a    a   ';
      event.currentTarget.value = '';

      setTasks((prevTasks) => {
        if (prevTasks.length === 0) {
          const initialTaskObject = {
            id: 1,
            text: newTaskText,
            color: activeCollor,
            isCompleted: false,
          };
          return [...prevTasks, initialTaskObject];
        } else {
          const newTaskObject = {
            id: prevTasks[prevTasks.length - 1].id + 1,
            text: newTaskText,
            color: activeCollor,
            isCompleted: false,
          };

          return [...prevTasks, newTaskObject];
        }
      });

      setActiveCollor('grey');
    }
  };

  let colorButtons;

  const inputRef = React.useRef();

  return (
    <div className="todo-input">
      <input onKeyDown={addTaskHandler} ref={inputRef} type="text" placeholder="Текст задачи..." />
      <ul>
        {
          (colorButtons = colors.map((color) => {
            return (
              <li
                onClick={(event) => {
                  setActiveCollor(color); // корректно ли хардкодом определять конкретное имя класса? или как можно было лучше сделать?
                  inputRef.current.focus(); // корректное ли использование юзрефа для связки двух элементов?
                }}
                className={`todo-color ${color}  ${color === activeCollor ? 'active' : ''}`}
                key={color}></li>
            );
          }))
        }
      </ul>
    </div>
  );
};

export default TodoInput;
