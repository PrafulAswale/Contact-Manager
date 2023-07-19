import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";

import "./App.css";

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
      <header className="App-header">
        <h1>Home</h1>
      </header>
    </div>
  );
}

export default App;
