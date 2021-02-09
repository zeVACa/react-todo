import React from 'react';

const TodoInput = ({ setTasks }) => {
  const colors = ['grey', 'blue', 'green', 'orange', 'red'];

  const [activeCollor, setActiveCollor] = React.useState('grey');

  console.log('active color is ', activeCollor);

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

  let colorButtons;

  const changePriorityHandler = (event) => {};

  return (
    <div className="todo-input">
      <input onKeyDown={addTaskHandler} type="text" placeholder="Текст задачи..." />
      <ul>
        {
          (colorButtons = colors.map((color) => {
            if (color === 'grey') {
              return (
                <li
                  onClick={(event) => {
                    setActiveCollor(event.currentTarget.classList[1]); //корректно ли хардкодом определять?
                    // console.log(event.currentTarget.classList[1]);
                  }}
                  className={`todo-color ${color} ${color === activeCollor ? 'active' : ''}`}></li> // не уверен, что лучший способ выставления цвета из-за дублирования
              );
            }
            return (
              <li
                onClick={(event) => {
                  // console.log(event.currentTarget.classList[1]);
                  setActiveCollor(event.currentTarget.classList[1]);
                }}
                className={`todo-color ${color}  ${color === activeCollor ? 'active' : ''}`}></li>
            );
          }))
        }
      </ul>
    </div>
  );
};

export default TodoInput;
