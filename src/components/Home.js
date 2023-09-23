import React, { useState, useEffect } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import LogoutIcon from '@mui/icons-material/Logout';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Home = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [users, setUsers] = useState();
  useEffect(() => {
    if (!window.sessionStorage.getItem("loginDetails")) {
      navigate("/login");
    } else if (window.sessionStorage.getItem("loginDetails")) {
      
      setUsers(JSON.parse(window.sessionStorage.getItem("loginDetails")));
    }
  }, []);
  const handleLogout =()=>{
    
    sessionStorage.removeItem('loginDetails');
    navigate("/login")
  }
  return (
    <div className="home">
      <header className="home_header">
        <div className="logo_box">
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-flat-dog-badge-logo_23-2149433387.jpg?w=2000"
            alt=""
          />
          <h2>Pet veterinary Shop</h2>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px",
            cursor:"pointer"
          }}
          
        >
          <AccountCircleIcon fontSize="large" color="white" onClick={handleClickOpen}/>
          <span style={{marginLeft:"10px",marginRight:"10px"}} onClick={handleClickOpen}>{users?.username}</span>
          <LogoutIcon fontSize="large" color="white" onClick={handleLogout}/>
        </div>
      </header>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <div className="profile">
            <p>Full Name: {users?.fullname}</p>
            <p>Email: {users?.email}</p>
            <p>Username: {users?.username}</p>
            <p>Pet Name: {users?.petname}</p>
            <p>No of visits: {users?.no_of_visit}</p>
          </div>
        </DialogTitle>
      </Dialog>
      <Dashboard/>
      <footer style={{width:"100%", borderTop:"4px solid grey",textAlign:"center"}}>
        <h2>Pet veterinary Shop &#169; All rights reserved.</h2>
      </footer>
    </div>
  );
};

export default Home;
