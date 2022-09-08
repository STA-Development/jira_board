import React from "react";
import "./JiraBoard.css";
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
//import { fa-brands fa-jira} from "@fortawesome/free-solid-svg-icons";

export default function JiraBoard() {
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
        </div>
        <div className="child2">
          <p>IN PROGRESS</p>
        </div>
        <div className="child3">
          <p>DONE</p>
        </div>
        <div className="child4">
          <p className="add">+</p>
        </div>
      </div>
    </div>
  );
}
