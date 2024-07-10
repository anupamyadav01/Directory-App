import { useEffect, useState } from "react";
import { v4 as generateId } from "uuid";

const AddNewPerson = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [mobile, setMobile] = useState("");
  const [age, setAge] = useState("");

  const dataFromLocalStorage = JSON.parse(localStorage.getItem("users"));
  console.log(dataFromLocalStorage);
  const [users, setUsers] = useState(dataFromLocalStorage || []);
  const handleOnClick = (e) => {
    e.preventDefault();
    localStorage.setItem(
      "users",
      JSON.stringify([
        ...users,
        { name, dob, aadhar, mobile, age, id: generateId() },
      ])
    );
    setUsers([...users, { name, dob, aadhar, mobile, age, id: generateId() }]);
    setName("");
    setDob("");
    setAadhar("");
    setMobile("");
    setAge("");
  };

  console.log(users);

  useEffect(() => {
    const calculateAge = (dateString) => {
      const birthDate = new Date(dateString);
      const today = new Date();

      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDifference = today.getMonth() - birthDate.getMonth();
      if (
        monthDifference < 0 ||
        (monthDifference === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }
      return age;
    };
    calculateAge();
  });
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
                    <button className="bg-red-500 text-white px-3 py-1 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
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
              className="border border-zinc-500 py-1 px-4 outline-none"
              placeholder="Age"
              value={age}
            />
            <button
              onClick={handleOnClick}
              className="border border-zinc-100 bg-white text-blue-500 py-1 px-10 underline"
            >
              Save
            </button>
          </form>
        </div>
      </div>
      <div className="place-self-end mt-5 max-w-[90%] mx-auto">
        <button className="bg-[#4472C4] text-white  text-lg py-2 px-7 rounded-sm mb-2 mr-2">
          Add Person
        </button>
      </div>
    </div>
  );
};

export default AddNewPerson;
