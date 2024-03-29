import { useState, useEffect } from "react";

function App() {

  const [data, setData] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch("https://randomuser.me/api/?results=10");

    if (!response.ok) {
      throw new Error("Veriler düzgün getirilemedi.");
    }

    const data = await response.json();

    const users = data.results;

    setData(users);
  };

  useEffect(() => {
    fetchUsers();
  }, [])
  

  return (
    <>
      <div className="container">
        <table>
          <thead>
            <th>Picture</th>
            <th>Gender</th>
            <th>Name</th>
            <th>Location</th>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <tr key={index}>
                <td>
                  <img src={user.picture.medium} alt={user.name.first} />
                </td>
                <td>{user.gender}</td>
                <td>
                  {user.name.first} {user.name.last}
                </td>
                <td>{user.location.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
