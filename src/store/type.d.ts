interface ITodo {
  id: string;
  name: string;
  description: string;
  isCompleted: boolean;
}

type TodoState = {
  todos: ITodo[];
};

type TodoAction = {
  type: string;
  todo: ITodo;
};

type DispatchType = (args: TodoAction) => TodoAction;
