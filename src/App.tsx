import Todos from "./components/Todos";
import NewTodos from "./components/NewTodos";
import TodosContextProvider from "./store/todos-contex";

function App() {


  return (
    <TodosContextProvider>
      <NewTodos />
      <Todos  />
    </TodosContextProvider>
  );
}

export default App;
