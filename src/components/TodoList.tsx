import React from "react";
import { Todo } from "./model";
import { Description } from "./model2";
import { SingleTodo } from "./SingleTodo";
import "./styles.css";
import "./JiraBoard.css";
import { Droppable } from "react-beautiful-dnd";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  IsAdd: boolean;
  setIsAdd: React.Dispatch<React.SetStateAction<boolean>>;
  inProgressTodos: Todo[];
  setInProgressTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  itemDescription: string;
  setItemDescription: React.Dispatch<React.SetStateAction<string>>;
  description: boolean;
  setDescription: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TodoList = ({
  todos,
  setTodos,
  setIsAdd,
  inProgressTodos,
  setInProgressTodos,
  completedTodos,
  setCompletedTodos,
  description,
  setDescription,
  setItemDescription,
}: Props) => {
  return (
    <div className="container">
      <Droppable droppableId="TodosList">
        {(provided) => (
          <div
            className="todos"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="heading">TO DO</span>
            {todos.map((todo, index) => (
              <SingleTodo
                setItemDescription={setItemDescription}
                index={index}
                todo={todo}
                todos={todos}
                key={todo.id}
                setTodos={setTodos}
                description={description}
                setDescription={setDescription}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <Droppable droppableId="TodosRemove">
        {(provided) => (
          <div
            className="todos remove"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="heading">IN PROGRESS</span>
            {inProgressTodos.map((todo, index) => (
              <SingleTodo
                index={index}
                todo={todo}
                todos={completedTodos}
                key={todo.id}
                setTodos={setInProgressTodos}
                description={description}
                setDescription={setDescription}
                setItemDescription={setItemDescription}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <Droppable droppableId="TodosRemove2">
        {(provided) => (
          <div
            className="todos remove2"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="heading">DONE</span>
            {completedTodos.map((todo, index) => (
              <SingleTodo
                index={index}
                todo={todo}
                todos={todos}
                key={todo.id}
                setTodos={setCompletedTodos}
                description={description}
                setDescription={setDescription}
                setItemDescription={setItemDescription}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <div className="child4">
        <button
          className="add"
          onClick={() => {
            setIsAdd(true);
            setItemDescription("");
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};
