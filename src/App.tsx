import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodos from "./components/NewTodos";

function App() {
  const todos = [new Todo("Learn React"), new Todo("Learn Typescript")];

  const addTodoHandler = (todoText: string) => {};

  return (
    <div>
      <NewTodos onAddTodo = {addTodoHandler}/>
      <Todos items={todos} />
    </div>
  );
}

export default App;
