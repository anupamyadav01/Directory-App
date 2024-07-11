import { useEffect, useState } from "react";
import { v4 as generateId } from "uuid";
import PropTypes from "prop-types";

const AddNewPerson = ({ users, setUsers }) => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState(null);
  const [aadhar, setAadhar] = useState("");
  const [mobile, setMobile] = useState("");
  const [age, setAge] = useState("");

  const [showForm, setShowForm] = useState(false);

  const handleSaveUser = (e) => {
    if (!name || !dob || !aadhar || !mobile) {
      alert("Please fill all the fields");
    } else if (aadhar.length !== 12) {
      alert("Please enter a valid Aadhar number");
    } else if (mobile.length !== 10) {
      alert("Please enter a valid Mobile number");
    } else {
      e.preventDefault();
      localStorage.setItem(
        "users",
        JSON.stringify([
          ...users,
          { name, dob, aadhar, mobile, age, id: generateId() },
        ])
      );
      setUsers([
        ...users,
        { name, dob, aadhar, mobile, age, id: generateId() },
      ]);
      setName("");
      setDob("");
      setAadhar("");
      setMobile("");
      setAge("");
      setShowForm(false);
    }
  };

  useEffect(() => {
    const calculateAge = () => {
      const birthDate = new Date(dob);
      const today = new Date();

      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDifference = today.getMonth() - birthDate.getMonth();
      if (
        monthDifference < 0 ||
        (monthDifference === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }
      setAge(age + " years old");
    };
    calculateAge();
  }, [dob]);

  const addPerson = () => {
    setShowForm(true);
  };
  const handleDeleteUser = (userId) => {
    const newData = users.filter((user) => user.id !== userId);
    localStorage.setItem("users", JSON.stringify(newData));
    setUsers(newData);
  };

  const handleCancelUser = () => {
    setShowForm(false);
    setName("");
    setDob("");
    setAadhar("");
    setMobile("");
    setAge("");
  };

  return (
    <div className="border border-black max-w-[90%] mx-auto flex flex-col mt-6">
      <div className="border-r border-black border-b  text-center max-w-60 font-bold py-3">
        <h1>Add New Person</h1>
      </div>
      <div className="border mx-8 border-black mt-6">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-[#4472C4] text-white">
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Date of Birth</th>
              <th className="py-2 px-4 border-b">Aadhar Number</th>
              <th className="py-2 px-4 border-b">Mobile Number</th>
              <th className="py-2 px-4 border-b">Age</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {users.length > 0 &&
              users.map((user, index) => (
                <tr key={index} className="text-center">
                  <td className="py-2 px-4 border-b">{user.name}</td>
                  <td className="py-2 px-4 border-b">{user.dob}</td>
                  <td className="py-2 px-4 border-b">{user.aadhar}</td>
                  <td className="py-2 px-4 border-b">{user.mobile}</td>
                  <td className="py-2 px-4 border-b">{user.age}</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded"
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {users.length === 0 && (
          <p className="text-center text-2xl font-semibold py-3">
            No Data Found
          </p>
        )}
      </div>
      {showForm && (
        <div className=" py-2 px-8">
          <div className="bg-[#4472C4] pb-8 pt-2">
            <div className="">
              <h1 className="text-center text-xl text-white font-bold mb-4">
                Fill below form for New Entry
              </h1>
            </div>

            <form className="flex gap-4 justify-center">
              <input
                type="text"
                value={name}
                className="border border-zinc-500 py-1 px-4 outline-none"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="date"
                value={dob}
                className="border border-zinc-500 py-1 outline-none px-4"
                onChange={(e) => setDob(e.target.value)}
                required
              />
              <input
                type="number"
                value={aadhar}
                className="border border-zinc-500 py-1 px-4 outline-none"
                placeholder="Aadhar Number"
                onChange={(e) => setAadhar(e.target.value)}
                required
              />
              <input
                type="number"
                value={mobile}
                className="border border-zinc-500 py-1 px-4 outline-none"
                placeholder="Mobile Number"
                onChange={(e) => setMobile(e.target.value)}
                required
              />
              <input
                type="text"
                readOnly
                className="border border-zinc-500 py-1 text-center outline-none"
                placeholder="Age"
                value={age}
              />
              <span className="bg-white flex gap-3 px-3">
                <button
                  onClick={handleSaveUser}
                  className="border border-zinc-100  text-blue-500 py-1 underline"
                >
                  Save
                </button>
                <button
                  onClick={handleCancelUser}
                  className="border border-zinc-100 text-blue-500 py-1 underline"
                >
                  Delete
                </button>
              </span>
            </form>
          </div>
        </div>
      )}
      <div className="place-self-end mt-5 max-w-[90%] mx-auto">
        <button
          className="bg-[#4472C4] text-white  text-lg py-2 px-7 rounded-sm mb-2 mr-2"
          onClick={addPerson}
        >
          Add Person
        </button>
      </div>
    </div>
  );
};

AddNewPerson.propTypes = {
  users: PropTypes.array,
  setUsers: PropTypes.func,
};

export default AddNewPerson;
