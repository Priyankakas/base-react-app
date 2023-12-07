import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  FormGroup,
  FormLabel,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  OutlinedInput,
} from "@mui/material";
import { setLoggedInUser } from "../../store/User/UserSlice";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import "./Login.scss";

const Login = (props) => {
  let initialState = {
    userName: "",
    password: "",
  };
  const [loginForm, setLoginForm] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  let dispatch = useDispatch();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setLoginForm((prevState) => ({
      ...prevState,
      [name]: value.trim(),
    }));
  };

  const handleLogin = () => {
    dispatch(setLoggedInUser(loginForm));
    setLoginForm(initialState);
  };

  let services= [
    ["Swiggy", 123],
    ["Swiggy", 227],
    ["Zomato", 103],
    ["Zomato", 171],
    ["Dunzo", 131],
    ["Zomato", 322],
    ["Swiggy", 181]
]

const findService =(servicesData)=>{
  let sortedArr = [];
  let serviceCount = 0;

servicesData.map(service =>{
            service.forEach(element => {
              if(element >=200){
                serviceCount++ ;
                sortedArr.push(service);
             }
          })
    })
    console.log("service", sortedArr, serviceCount);
}

console.log("findService", findService(services))
 


  return (
    <div className="login-container" style={{ background: "#adadad" }}>
      <h1 className="pb-3">Welcome !!</h1>
      <FormGroup sx={{ width: "250px" }} className="mb-2 d-flex">
        <FormLabel className="col-4">Username</FormLabel>
        <OutlinedInput
          value={loginForm.userName}
          type="text"
          name={"userName"}
          onChange={handleChange}
          placeholder="username"
        />
      </FormGroup>
      <FormGroup sx={{ width: "250px" }} className="mb-2 d-flex">
        <FormLabel className="col-4">Password</FormLabel>
        <OutlinedInput
          value={loginForm.password}
          type={showPassword ? "text" : "password"}
          name="password"
          onChange={handleChange}
          placeholder="password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormGroup>
      <div className="text-center">
        <Button type="button" variant="contained" onClick={handleLogin}>
          Login{" "}
        </Button>
      </div>
    </div>
  );
};

Login.propTypes = {};

export default Login;
