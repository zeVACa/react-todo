import TodoItem from './TodoItem';

const TodoList = ({ tasks, setTasks }) => {
  return tasks.length === 0 ? (
    <p>Список пуст</p>
  ) : (
    tasks.map((obj) => {
      console.log(obj);
      return <TodoItem setTasks={setTasks} key={obj.id} id={obj.id} text={obj.text} />;
    })
  );
};

export default TodoList;
