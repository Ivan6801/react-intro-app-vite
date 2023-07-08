import Counter from "./components/Counter";
import Search from "./components/Search";
import List from "./components/List";
import Item from "./components/item";
import CreateButton from "./components/CreateButton";
import "./App.css";

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el Curso de Intro a React.js", completed: false },
  { text: "Llorar con la Llorona", completed: false },
  { text: "LALALALALA", completed: false },
];

function App() {
  return (
    <>
      <Counter />
      <Search />
      <List>
        {defaultTodos?.map((all) => (
          <Item key={all.text} text={all.text} completed={all.completed} />
        ))}
      </List>
      <CreateButton />
    </>
  );
}

export default App;
