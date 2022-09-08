import React, { useRef } from "react";
import "./styles.css";
import Typography from "@mui/material/Typography";
import "./Modal/AddText.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Description } from "./model2";
import SingleDescription from "./SingleDescription";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  description: boolean;
  setDescription: React.Dispatch<React.SetStateAction<boolean>>;
  IsAdd: boolean;
  setIsAdd: React.Dispatch<React.SetStateAction<boolean>>;
  itemDescription: string;
  setItemDescription: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({
  todo,
  setTodo,
  description,
  setDescription,
  IsAdd,
  setIsAdd,
  itemDescription,
  setItemDescription,
  handleAdd,
}: Props) => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 5,
  };

  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <Modal
        open={IsAdd}
        onClose={() => setIsAdd(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} onSubmit={(e) => handleAdd(e)}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Title
          </Typography>
          <input
            ref={inputRef}
            type="text"
            name="name"
            className="Text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Description
          </Typography>
          <textarea
            value={itemDescription}
            onChange={(e) => setItemDescription(e.target.value)}
            className="TextArea"
          />
          <br />
          <button
            className="SetButton"
            onClick={(e) => {
              handleAdd(e);
              setIsAdd(false);
              setItemDescription("");
            }}
          >
            Set
          </button>
        </Box>
      </Modal>

      <Modal
        open={description}
        onClose={() => setDescription(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div id="modal-modal-title">{itemDescription}</div>
        </Box>
      </Modal>
    </div>
  );
};

export default InputField;
