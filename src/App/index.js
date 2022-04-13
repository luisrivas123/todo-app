import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";

function App() {

  return (
    // Provedor de los datos del contexto a todos los componentes
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
