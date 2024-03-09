import React, { useEffect, useState } from "react";
import "../component/all.min.css";
import axios from "axios";
import { Link } from 'react-router-dom';
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/user/show")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  function deleteUser(id) {
    axios.delete(`http://127.0.0.1:8000/api/user/delete/${id}`);
  }
  const showData = users.map((user, index) => {
    return (
      <>
        <tr
          key={index}
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        >
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
          >
            {index}
          </th>
          <td className="px-6 py-4 text-center">{user.name}</td>
          <td className="px-6 py-4 text-center">{user.email}</td>
          <td className="px-6 py-4 text-center">
            <i
              onClick={() => deleteUser(user.id)}
              class="fa-solid fa-trash text-2xl text-red-400 cursor-pointer"
            ></i>
            <Link to={`${user.id}`}>
              <i className="fa-solid fa-pen-to-square text-2xl ml-2 hover:text-sky-400 cursor-pointer"></i>
            </Link>
          </td>
        </tr>
      </>
    );
  });

  return (
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full text-left  text-gray-500">
          <thead className="bg-gray-500 text-white">
            <tr>
              <th scope="col" className="px-6 py-3 text-center">
                Users id
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Users Name
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Email
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Update & Delete
              </th>
            </tr>
          </thead>
          <tbody>{showData}</tbody>
        </table>
      </div>
    </>
  );
}

export default Users;
