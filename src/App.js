import React from "react";
import Footer from "./component/Footer/Footer";
import VisibleTodoList from "./component/Container/VisibleTodoList/VisibleTodoList";
import AddTodo from "./component/Container/AddTodo/VisibleTodoList/AddTodo";
function App() {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}

export default App;
