import TodoItem from './TodoItem';

const TodoList = ({ tasks, setTasks, color }) => {
  return tasks.length === 0 ? (
    <p>Список пуст</p>
  ) : (
    tasks.map((obj) => {
      return (
        <TodoItem
          setTasks={setTasks}
          key={obj.id}
          id={obj.id}
          text={obj.text}
          color={obj.color}
          isCompleted={obj.isCompleted}
        />
      );
    })
  );
};

export default TodoList;
