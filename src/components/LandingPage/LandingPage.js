import React from "react";
import Login from "../Login/Login";
import { useSelector } from "react-redux";
import { getLoggedInUser } from "./../../store/User/UserSelector";
import Router from "ROUTES/routes.js";

const LandingPage = () => {
  let selectedUser = useSelector(getLoggedInUser);
  console.log("selectedUser", selectedUser);

  const checkIfValidUser = () => {
    if (selectedUser?.userName === "admin" && selectedUser.password === "admin")
      return true;
  };

  return <div>{checkIfValidUser() ? <Router /> : <Login />}</div>;
};

LandingPage.propTypes = {};

export default LandingPage;
