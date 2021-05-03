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
      (todo) => todo.name !== action.todo.name
    );
    return {
      ...state,
      todos: updatedTodos,
    };
  }
  if (action.type === COMPLETE_TODO) {
    let existedItem: ITodo | undefined = state.todos.find(
      (item) => action.todo.id === item.id
    );
    if (existedItem) {
      existedItem.isCompleted = !existedItem.isCompleted;
    }

    console.log(state.todos);
    return {
      ...state,
    };
  }

  return state;
};

export default reducer;
