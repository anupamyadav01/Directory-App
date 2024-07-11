import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import AddNewPerson from "./pages/AddNewPerson/AddNewPerson";
import RetrieveInfo from "./pages/RetrieveInfo/RetrieveInfo";

const App = () => {
  const [page, setPage] = useState("AddNewPerson");
  const dataFromLocalStorage = JSON.parse(localStorage.getItem("users"));
  const [users, setUsers] = useState(dataFromLocalStorage || []);

  return (
    <div>
      <Navbar />
      <div className="mt-4 max-w-[90%]  mx-auto flex gap-8">
        <button
          className="bg-[#4472C4] text-white  text-lg py-2 px-7"
          onClick={() => setPage("AddNewPerson")}
        >
          Add New Person
        </button>
        <button
          className="bg-[#4472C4] text-white  text-lg py-2 px-7"
          onClick={() => setPage("RetrieveInfo")}
        >
          Retrieve Info
        </button>
      </div>
      {page === "AddNewPerson" ? (
        <AddNewPerson users={users} setUsers={setUsers} />
      ) : (
        <RetrieveInfo users={users} setUsers={setUsers} />
      )}
    </div>
  );
};

export default App;
