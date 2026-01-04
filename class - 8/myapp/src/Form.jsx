import React, { useState } from "react";

const Form = () => {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(user);
    setUsers([...users, user]);
  };

  const handleChange = (e) => {
    let value = e.target.value;
    let id = e.target.id;

    setUser({
      ...user,
      [id]: value,
    });
    console.log(id);
  };

  const handleDelete = (idx) => {
    users.splice(idx, 1);
    setUsers([...users]);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>User Detail</h2>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="text" id="email" onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>

      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => {
            return (
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button>Edit</button>
                  <button onClick={() => handleDelete(idx)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Form;

// 1. useState
// 2. Array and object
// 3. Array Method (map, forEach, filter, reduce, some, every, includes, sort)
