import { useState } from "react";
import React from "react";
import "./App.css";
import AddUser from "./components/AddUser";
import UsersList from "./components/UsersList";

function App() {
  const [userData, setUserData] = useState([]);

  const saveUserHandler = (user) => {
    setUserData((prevUsers) => {
      console.log("THIS IS IN App.js: " + userData.userName);
      return [user, ...prevUsers];
    });
  };

  return (
    <div>
      <AddUser addUser={saveUserHandler} />
      <UsersList usersData={userData} />;
    </div>
  );
}

export default App;

// For output props data
// <div>
//   <pre>{JSON.stringify(userData, null, 2)}</pre>
// </div>
