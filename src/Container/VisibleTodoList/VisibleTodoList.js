import { connect } from "react-redux";
import { toggleTodo, visibilityFilters } from "../../../Store/actions";
import TodoList from "../../../component/Todolist/TodoList";
import { visibilityFiter } from "../../../Store";

const getVisibleTodos = (todo, filter) => {
  switch (filter) {
    case visibilityFilters.SHOW_ALL:
      return todos;
    case visibilityFilters.SHOW_COMPLETED:
      return todo.filter((t) => t.completed);
    case visibilityFilters.SHOW_ACTIVE:
      return todos.filter((t) => !t.completed);
    default:
      return todos;
  }
};
const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id)),
});
export default connect(mapStateToProps, mapStateToProps)(TodoList);
