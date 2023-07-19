import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const data = [];
    const promise = async () => {
      await fetch("https://jsonplaceholder.typicode.com/users/")
        .then((response) => response.json())
        .then((json) => {
          json.map((contact) => {
            return data.push({
              id: contact.id,
              name: contact.name,
              number: contact.phone,
              email: contact.email,
            });
          });
        });
      dispatch({ type: "FETCH_CONTACTS", payload: data });
    };
    promise();
  });
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/add" element={<AddContact />}></Route>
        <Route path="/edit/:id" element={<EditContact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
