import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Todo } from "./model";
import { Description } from "./model2";
import "./styles.css";
type Props = {
  index: number;
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  description: boolean;
  setDescription: React.Dispatch<React.SetStateAction<boolean>>;
  setItemDescription: React.Dispatch<React.SetStateAction<string>>;
};

export const SingleTodo = ({
  todo,
  todos,
  setTodos,
  index,
  description,
  setDescription,
  setItemDescription,
}: Props) => {
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const haandleItem = (itemDescription: string) => {
    setDescription(true);
    setItemDescription(itemDescription);
  };

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided) => (
        <div
          onClick={() => haandleItem(todo.itemDescription)}
          className="todos__single"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {todo.todo}
        </div>
      )}
    </Draggable>
  );
};
