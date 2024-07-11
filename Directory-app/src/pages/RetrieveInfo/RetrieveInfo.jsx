import { useState } from "react";
import PropTypes from "prop-types";
const RetrieveInfo = ({ users }) => {
  const [aadharNo, setAadharNo] = useState("");
  const [user, setUser] = useState([]);
  const [userData, setUserData] = useState(users);

  const findUserInfo = (ano) => {
    if (!ano) return;
    console.log("hello");
    const data = userData.filter((user) => user.aadhar === ano);
    setUser(data);
  };
  // const users = [
  //   {
  //     name: "Anupam",
  //     dob: "01/01/2000",
  //     aadhar: "123456789012",
  //     mobile: "1234567890",
  //     age: "20 years old",
  //     id: 1,
  //   },
  // ];
  return (
    <div className="border border-black max-w-[90%] mx-auto flex flex-col mt-6">
      <div className="border-r border-black border-b  text-center max-w-60 font-bold py-3">
        <h1>Retrieve Information</h1>
      </div>
      <div className="mt-8 w-full flex justify-center rounded-sm">
        <input
          type="text"
          onClick={(e) => setAadharNo(e.target.value)}
          className="border border-black py-1 px-4 text-xl outline-none"
        />
        <button
          className="bg-[#4472C4] text-white  text-lg py-2 px-7"
          onClick={() => findUserInfo(aadharNo)}
        >
          Find
        </button>
      </div>
      <div className="flex justify-center w-full p-10">
        {user.length > 0 ? (
          user.map((item) => {
            return (
              <div key={item.id}>
                <span className="flex gap-4 items-center justify-center">
                  <h1 className="text-lg font-bold">Name : </h1>
                  <p>{item.name}</p>
                </span>{" "}
                <span className="flex gap-4 items-center justify-center">
                  <h1 className="text-lg font-bold">DOB : </h1>
                  <p>{item.dob}</p>
                </span>{" "}
                <span className="flex gap-4 items-center justify-center">
                  <h1 className="text-lg font-bold">Aadhar : </h1>
                  <p>{item.aadhar}</p>
                </span>{" "}
                <span className="flex gap-4 items-center justify-center">
                  <h1 className="text-lg font-bold">Mobile : </h1>
                  <p>{item.mobile}</p>
                </span>{" "}
                <span className="flex gap-4 items-center justify-center">
                  <h1 className="text-lg font-bold">Age : </h1>
                  <p>{item.age}</p>
                </span>
              </div>
            );
          })
        ) : (
          <div className="text-2xl font-bold">No data</div>
        )}
      </div>
    </div>
  );
};

RetrieveInfo.propTypes = {
  users: PropTypes.array,
};

export default RetrieveInfo;
