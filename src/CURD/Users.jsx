import React, { useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Sam", age: 25 },
    { id: 2, name: "Jone", age: 36 },
    { id: 3, name: "Kumar", age: 65 },
    { id: 4, name: "Amit", age: 52 },
  ]);

  const [form, setForm] = useState({ name: "", age: "" });
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Step 3: Handle Create & Update
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.age) return;

    if (editId) {
      setUsers(
        users.map((user) =>
          user.id === editId
            ? { ...user, name: form.name, age: +form.age }
            : user
        )
      );
      setEditId(null);
    } else {
      const newUser = {
        id: Date.now(),
        name: form.name,
        age: +form.age,
      };
      setUsers([...users, newUser]);
    }

    setForm({ name: "", age: "" });
  };

  //✅ Step 4: Handle Edit & Delete
  const handleEdit = (user) => {
    setForm({ name: user.name, age: user.age });
    setEditId(user.id);
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter name"
              className="border p-2 rounded"
            />
            <input
              name="age"
              value={form.age}
              onChange={handleChange}
              placeholder="Enter age"
              type="number"
              className="border p-2 rounded"
            />
            <button
              type="submit"
              className="bg-blue-900 text-white px-6 py-2 rounded"
            >
              {editId ? "Update" : "Add"}
            </button>
          </div>
        </form>

        <ul>
          {users.map((user) => (
            <li key={user.id} className="flex justify-between">
              <div>
                {user.name} ({user.age})
              </div>

              <div className="space-x-3 space-y-2">
                <button
                  onClick={() => handleEdit(user)}
                  className="bg-green-900 text-white px-6 py-2 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="bg-red-900 text-white px-6 py-2 rounded"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Users;
