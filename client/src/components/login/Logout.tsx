import React  from "react";


const Logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };
  

  export default Logout ;