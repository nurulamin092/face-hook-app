import React from "react";
import { useNavigate } from "react-router-dom";
import LogoutImg from "../../assets/icons/logout.svg";

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login");
  };
  return (
    <>
      <button className="icon-btn" onClick={handleLogout}>
        <img src={LogoutImg} alt="Logout" />
      </button>
    </>
  );
};

export default Logout;
