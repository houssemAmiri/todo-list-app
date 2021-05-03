import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
} from "../actions/action-types/todo-actions";

const initialState: TodoState = {
  todos: [
    {
      id: 1,
      name: "Envoyer un mail ",
      description: "à toute l'equipe",
      isCompleted: true,
    },
    {
      id: 2,
      name: "Faire l'exercice",
      description: "React only",
      isCompleted: true,
    },
  ],
};

const reducer = (
  state: TodoState = initialState,
  action: TodoAction
): TodoState => {
  if (action.type === ADD_TODO) {
    const newTodo: ITodo = {
      id: Math.random(),
      name: action.todo.name,
      description: action.todo.description,
      isCompleted: action.todo.isCompleted,
    };
    return {
      ...state,
      todos: state.todos.concat(newTodo),
    };
  }
  if (action.type === DELETE_TODO) {
    const updatedTodos: ITodo[] = state.todos.filter(
      (todo) => todo.name !== action.todo.name
    );
    return {
      ...state,
      todos: updatedTodos,
    };
  }

  return state;
};

export default reducer;
