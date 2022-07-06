import React from "react";
import "./JiraBoard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import jira from "../logos/jira.svg";
import Jira from "./IconComponents/jira";
//import search from "../logos/search.svg";
import Search from "./IconComponents/search";
import Add from "./IconComponents/add";
import bars from "../logos/bars-solid.svg";
import question from "../logos/circle-question.svg";
import profile from "../logos/profile.svg";

//import { fa-brands fa-jira} from "@fortawesome/free-solid-svg-icons";

export default function JiraBoard() {
  return (
    <div className="Page">
      <div className="NavBarSide">
        <div className="bar">
          <div className="IconsPr">
            <div className="Icons1">
              <ul>
                <li>
                  <Jira />
                </li>
                <li>
                  <Search />
                </li>
                <li>
                  <Add />
                </li>
              </ul>
            </div>
          </div>
          <div className="IconsPr2">
            <div className="Icons2">
              <ul>
                <li>
                  <img className="jiraLogo" src={bars} alt="jira"></img>
                </li>
                <li>
                  <img className="jiraLogo" src={question} alt="jira"></img>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bar2">
          <p>Second Navside</p>
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
