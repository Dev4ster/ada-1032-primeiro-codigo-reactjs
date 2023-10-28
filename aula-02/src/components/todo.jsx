import { useReducer, useState } from "react";

const TODO_MODEL = {
  id: 1,
  description: "",
  isCompleted: false,
  dueDate: new Date(),
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return state.filter((todo) => todo.id !== action.payload);
    case "EDIT":
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo.payload };
        }
        return todo;
      });
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isCompleted: true,
          };
        }
        return todo;
      });
    default:
      return state;
  }
};

const addTodo = (todo) => ({
  type: "ADD",
  payload: todo,
});

const deleteTodo = (todoId) => ({
  type: "DELETE",
  payload: todoId,
});

const editTodo = (todo) => ({
  type: "EDIT",
  payload: todo,
});

const completeTodo = (todoId) => ({
  type: "COMPLETE",
  payload: todoId,
});

const FORM_DATA_INITIAL_VALUES = {
  description: "",
  dueDate: new Date(),
};

function Todo() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [formData, setFormData] = useState({
    ...FORM_DATA_INITIAL_VALUES,
  });

  const resetFormData = () => {
    setFormData({
      ...FORM_DATA_INITIAL_VALUES,
    });
  };

  const onChangeFormData = (input, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [input]: value,
    }));
  };

  const onInputDescription = (e) => {
    onChangeFormData("description", e.target.value);
  };

  const onChangeDueDate = (e) => {
    onChangeFormData("dueDate", new Date(e.target.value));
  };

  const handleAddTodo = () => {
    Object.entries(formData).forEach(([key, value]) => {
      if (!value) {
        throw new Error(`O campo ${key} está sem valor`);
      }
    });

    const id = new Date().getTime();
    dispatch(
      addTodo({
        ...formData,
        id,
        isCompleted: false,
      })
    );
    // resetFormData();
  };

  const handleDeleteTodo = (todoId) => {
    dispatch(deleteTodo(todoId));
  };

  const handleCompleteTodo = (todoId) => {
    dispatch(completeTodo(todoId));
  };

  const dateFormatted = (date = new Date()) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  };

  console.log("todos", todos);

  return (
    <div>
      <input
        type="text"
        value={formData.description}
        onInput={onInputDescription}
      />
      <input
        type="date"
        onChange={onChangeDueDate}
        value={dateFormatted(formData.dueDate)}
      />

      <button onClick={handleAddTodo}>Add</button>

      <hr />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <p>{todo.description}</p>
            <small>{dateFormatted(todo.dueDate)}</small>
            <strong>{todo.isCompleted ? "COMPLETO" : "PENDENTE"}</strong>
            <button onClick={() => handleCompleteTodo(todo.id)}>
              Marcar como concluída
            </button>
            <button onClick={() => handleDeleteTodo(todo.id)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
