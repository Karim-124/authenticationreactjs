import React, { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/user/show")
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }, [])
  const showData = users.map((user, index) => {
    return (
      <>
        <tr key={index} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {index}
          </th>
          <td class="px-6 py-4">{user.name}</td>
          <td class="px-6 py-4">{user.email}</td>
          <td class="px-6 py-4">Laptop</td>
          <td class="px-6 py-4">$2999</td>
        </tr></>
    )
  })
  return (
    <>
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Users id
              </th><th scope="col" class="px-6 py-3">
                Users Name
              </th>
              <th scope="col" class="px-6 py-3">
                Email
              </th>
              <th scope="col" class="px-6 py-3">
                Category
              </th>
              <th scope="col" class="px-6 py-3">
                Price
              </th>
            </tr>
          </thead>
          <tbody>

            {showData}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Users;
