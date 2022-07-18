import React from "react";
import "./JiraBoard.css";
import { useState } from "react";
import Jira from "./IconComponents/jira";
import Search from "./IconComponents/search";
import Add from "./IconComponents/add";
import Bars from "./IconComponents/bars";
import ReactLogo from "./IconComponents/ReactLogo";
import Question from "./IconComponents/question";
import Profile from "./IconComponents/profile";
import BoardSvg from "./IconComponents/board";
import FeutureSvg from "./IconComponents/feutures";
import SettingSvg from "./IconComponents/setting";
import FeedBackSvg from "./IconComponents/feedBack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Modal/AddText.css";
import Modal from "@mui/material/Modal";

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

export default function JiraBoard() {
  const [IsAdd, setIsAdd] = useState(false);
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState<any[]>([]);

  const addItem = () => {
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };
    setItems((oldList) => [...oldList, item]);
    setNewItem("");
    console.log(items);
  };
  return (
    <div className="Page">
      <div className="NavBarSide">
        <div className="bar">
          <div className="IconsPr">
            <div className="Icons1">
              <div>
                <Jira />
              </div>
              <div>
                <Search />
              </div>
              <div>
                <Add />
              </div>
            </div>
            <div className="Icons2">
              <div>
                <Bars />
              </div>
              <div>
                <Question />
              </div>
              <div>
                <Profile />
              </div>
            </div>
          </div>
        </div>
        <div className="EditLogos">
          <div className="EditLogo">
            <ReactLogo />
            <p className="JiraLogo">
              Nuclus <br /> Software Project
            </p>
          </div>
          <div className="EditLogo2">
            <BoardSvg />
            <p>Board</p>
          </div>
          <div className="EditLogo3">
            <FeutureSvg />
            <p className="Boarder">Features</p>
          </div>
          <div className="EditLogo4">
            <SettingSvg />
            <p>Settings</p>
          </div>
          <div className="EditLogo5">
            <FeedBackSvg />
            <p className="FeedBack">Give Feedback</p>
          </div>
        </div>
      </div>

      <div className="Parent">
        <div className="child1">
          <p className="headerBoard">TO DO</p>
          <div>
            <ul className="ItemLists">
              {items.map((item) => {
                return <li key={item.id}>{item.value}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="child2">
          <p>IN PROGRESS</p>
        </div>
        <div className="child3">
          <p>DONE</p>
        </div>
        <div className="child4">
          <button className="add" onClick={() => setIsAdd(true)}>
            +
          </button>
          <Modal
            open={IsAdd}
            onClose={() => setIsAdd(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Title
              </Typography>
              <input
                type="text"
                name="name"
                className="Text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
              />
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Description
              </Typography>
              <textarea className="TextArea" />
              <br />
              <button className="SetButton" onClick={() => addItem()}>
                Set
              </button>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
}
