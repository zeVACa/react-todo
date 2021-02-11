import React from 'react';

const TodoInput = ({ setTasks, activeCollor, setActiveCollor }) => {
  const colors = ['grey', 'blue', 'green', 'orange', 'red'];

  const addTaskHandler = (event) => {
    if (event.key === 'Enter' && event.currentTarget.value !== '') {
      const newTaskText = event.currentTarget.value.replace(/\s+/g, ' ').trim(); // remoing multiple spaces like '    a    a   ';
      event.currentTarget.value = '';

      setTasks((prevTasks) => {
        console.log('------');
        if (prevTasks.length == 0) {
          let initialTaskObject = {
            id: 1,
            text: newTaskText,
            color: activeCollor,
            isCompleted: false,
          };
          return [...prevTasks, initialTaskObject];
        } else {
          let newTaskObject = {
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
                  setActiveCollor(event.currentTarget.classList[1]); // корректно ли хардкодом определять конкретное имя класса? или как можно было лучше сделать?
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
