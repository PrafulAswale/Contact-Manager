import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Home() {
  const contacts = useSelector((state) => state);

  const dispatch = useDispatch();

  //delete fuction
  const deleteContact = (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
    toast.success("Contact deleted successfully!");
  };
  return (
    <div className="container">
      <h1 className="display-3 text-center fw-bold">Contact List</h1>
      <div className="col-md-12 my-5 text-end">
        <Link to="/add" className="btn btn-outline-dark">
          Add Contact
        </Link>
      </div>
      <div className="row">
        {/* mapping all contacts*/}
        {contacts.map((contact, id) => {
          return (
            <div className="col-3">
              <div className="card mb-3" style={{ width: "18rem" }} key={id}>
                <div className="card-body">
                  <h5 className="card-title">{contact.name}</h5>
                  <p className="card-text">Email: {contact.email}</p>
                  <p className="card-text">Phone: {contact.number}</p>
                  <Link
                    to={`/edit/${contact.id}`}
                    className="btn btn-small btn-primary me-2"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    onClick={() => deleteContact(contact.id)}
                    className="btn btn-small btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
