import React, { useReducer, useState } from "react";
import "./App.css";

function reducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.value
      }
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, action.value],
        user: ""
      }
    case 'DELETE_USER':
      return {
        ...state,
        users: state.users.filter((_, idx) => idx !== action.index)
      }
    case 'SET_EDIT_USER':
      return {
        ...state,
        user: action.value,
        editIndex: action.index
      }
    case 'UPDATE_USER':
      const updatedUsers = [...state.users];
      updatedUsers[state.editIndex] = state.user;
      return {
        ...state,
        users: updatedUsers,
        user: "",
        editIndex: null
      }
    case 'CLEAR_USERS':
      return {
        ...state,
        users: []
      }
    default:
      return state;
  }
}

export const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    users: [],
    user: "",
    editIndex: null,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (state.editIndex !== null) {
      dispatch({ type: 'UPDATE_USER' });
      setIsModalOpen(false);
    } else {
      dispatch({
        type: 'ADD_USER',
        value: state.user
      });
    }
  }

  const onChange = (e) => {
    dispatch({
      type: 'SET_USER',
      value: e.target.value
    });
  }

  const onDelete = (index) => {
    dispatch({
      type: 'DELETE_USER',
      index
    });
  }

  const onEdit = (index) => {
    dispatch({
      type: 'SET_EDIT_USER',
      value: state.users[index],
      index
    });
    setIsModalOpen(true);
  }

  const onClearAll = () => {
    dispatch({
      type: 'CLEAR_USERS'
    });
  }

  return (
    <div className="container">
      <h2 className="title">User Management</h2>
      <form className="input-field" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter Your Name And Surname"
          value={state.user}
          onChange={onChange}
        />
        <button className="btn-add" disabled={!state.user.trim()}>
          {state.editIndex !== null ? "Update User" : "Add User"}
        </button>
      </form>

      {state.users.length > 0 && (
        <button className="btn-clear" onClick={onClearAll}>
          Clear All Users
        </button>
      )}

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {state.users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user}</td>
              <td>
                <button className="btn-delete" onClick={() => onDelete(index)}>
                  Delete
                </button>
              </td>
              <td>
                <button className="btn-edit" onClick={() => onEdit(index)}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Edit User</h3>
            <form onSubmit={onSubmit}>
              <input
                type="text"
                placeholder="Update Name and Surname"
                value={state.user}
                onChange={onChange}
              />
              <button className="btn-update" type="submit" disabled={!state.user.trim()}>
                Update
              </button>
              <button className="btn-cancel" type="button" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
