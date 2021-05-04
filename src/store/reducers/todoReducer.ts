import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
} from "../actions/action-types/todo-actions";

const initialState: TodoState = {
  todos: [
    {
      id: "dsfsfsfs145154fdsfs84f",
      name: "Envoyer un mail ",
      description: "à toute l'equipe",
      isCompleted: true,
    },
    {
      id: "dsfsfdsfds784c65dsdscdsc",
      name: "Faire l'exercice",
      description: "React only",
      isCompleted: false,
    },
  ],
};

const reducer = (
  state: TodoState = initialState,
  action: TodoAction
): TodoState => {
  if (action.type === ADD_TODO) {
    const newTodo: ITodo = {
      id: action.todo.id,
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
      (todo) => todo.id !== action.todo.id
    );
    return {
      ...state,
      todos: updatedTodos,
    };
  }
  if (action.type === COMPLETE_TODO) {
    const newTodos: ITodo[] = [...state.todos];

    let todo1 = newTodos.filter((t) => t.id === action.todo.id)[0];

    todo1.isCompleted = !todo1.isCompleted;

    return { ...state, todos: newTodos };
  }

  return state;
};

export default reducer;
