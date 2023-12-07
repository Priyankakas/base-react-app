import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { ROUTES } from 'CONSTANTS/RouteConstants';
import { setLoggedInUser } from "STORE/User/UserSlice";
import { ThemeContext } from "COMPONENTS/Context/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedInUser } from './../../../store/User/UserSelector';

import "./Sidebar.scss";
import { Avatar } from "@mui/material";

const Sidebar = () => {
  const { toggleFunction } = useContext(ThemeContext);
  let loggedInUser = useSelector(getLoggedInUser);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const sidebarItems = [
    {
      to: "/tasks",
      name: "Tasks",
    },
    {
      to: "/contact",
      name: "Contact",
    },
  ];

  const handleLogout =()=>{
    let loggedInuser = {}
    dispatch(setLoggedInUser(loggedInuser));
    navigate(ROUTES.HOME);
  }

  console.log("username", loggedInUser)

  return (
    <div
      className="sidebar"
    >
      <div className="sidebar-body py-2">
          <div className="d-flex align-items-center justify-content-center">
            <Avatar>{loggedInUser.userName.charAt(0)}</Avatar>
            <strong className="ps-2">{"Hi, " + loggedInUser.userName}</strong>
          </div>

          <div className="mt-4">
            {sidebarItems.map((item, index) => {
              return (
                <div key={index}>
                  <NavLink
                    to={item.to}
                    style={({ isActive, isPending }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "red" : "black",
                      };
                    }}
                  >
                    {item.name}
                  </NavLink>
                </div>
              );
            })}
          </div>
      </div>
      

      <div className="sidebar-footer">
        <Button onClick={toggleFunction}  className="mb-2">
            {"ToggleTheme"}
        </Button>
        <Button onClick={handleLogout}>
            {"Logout"}
        </Button>
      </div>
    </div>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
