import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
// import './App.css';

const defaultTodos = [
  {text: 'Diseñar', completed: true},
  {text: 'Programar', completed: false},
  {text: 'Testing', completed: false},
  {text: 'Producción', completed: false},
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todos => !!todos.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if(!searchValue >= 1){
    searchedTodos = todos;
  }else{
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  return (
    //<div>
    <React.Fragment>
      <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
      />
      {/* <h2>Has completado 2 de 3 TODOs</h2> */}
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      {/* <input placeholder="TODO-app" /> */}
      <TodoList>
      {searchedTodos.map(todo => (
        <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
        />
      ))}
      </TodoList>
      <CreateTodoButton />
      {/* <button>+</button> */}
    </React.Fragment>
    //</div>
  );
}

export default App;
