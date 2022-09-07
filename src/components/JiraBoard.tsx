import React from "react";
import "./JiraBoard.css";
import { useState, useEffect } from "react";
import { Todo } from "./model";
import { Description } from "./model2";
import InputField from "./InputField";
import Sidebar from "./SideBar/Sidebar";
import Typography from "@mui/material/Typography";
import "./Modal/AddText.css";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { TodoList } from "./TodoList";

const JiraBoard = () => {
  const [IsAdd, setIsAdd] = useState(false); //will open the modal
  const [description, setDescription] = useState(false); //will open description in item
  const [todo, setTodo] = useState<string>(""); //for adding items
  const [todos, setTodos] = useState<Todo[]>([]); //will create an array to have several items
  const [inProgressTodos, setInProgressTodos] = useState<Todo[]>([]); //put items for inProgress div
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]); //put items for completed div
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [itemDescription, setItemDescription] = useState<string>(""); //items for description

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([
        ...todos,
        { id: Date.now(), todo, isDone: false, itemDescription },
      ]);
      setTodo("");
    }
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;
    let add,
      active = todos,
      progress = inProgressTodos,
      complete = completedTodos;

    if (source.droppableId === "TodosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else if (source.droppableId === "TodosRemove") {
      add = progress[source.index];
      progress.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }
    ////////////////////////////////////////////////////////
    if (destination.droppableId === "TodosList") {
      active.splice(destination.index, 0, add);
    } else if (destination.droppableId === "TodosRemove") {
      progress.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }
    setCompletedTodos(complete);
    setTodos(active);
    setInProgressTodos(progress);
  };

  return (
    <div className="Page">
      <Sidebar />
      <DragDropContext onDragEnd={onDragEnd}>
        <TodoList
          todos={todos}
          setTodos={setTodos}
          IsAdd={IsAdd}
          setIsAdd={setIsAdd}
          inProgressTodos={inProgressTodos}
          setInProgressTodos={setInProgressTodos}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
          itemDescription={itemDescription}
          setItemDescription={setItemDescription}
          description={description}
          setDescription={setDescription}
        />

        <InputField
          todo={todo}
          setTodo={setTodo}
          description={description}
          setDescription={setDescription}
          IsAdd={IsAdd}
          setIsAdd={setIsAdd}
          itemDescription={itemDescription}
          setItemDescription={setItemDescription}
          handleAdd={handleAdd}
        />
      </DragDropContext>
    </div>
  );
};

export default JiraBoard;
