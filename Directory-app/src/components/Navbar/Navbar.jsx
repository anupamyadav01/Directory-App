/* eslint-disable react/no-unescaped-entities */
const Navbar = () => {
  return (
    <div>
      <h1 className="w-full bg-[#4472C4] text-center text-white font-medium text-2xl py-4">
        Anupam Yadav's Directory App
      </h1>
      <div className="mt-4 max-w-[90%]  mx-auto flex gap-8">
        <button className="bg-[#4472C4] text-white  text-lg py-2 px-7">
          Add New Person
        </button>
        <button className="bg-[#4472C4] text-white  text-lg py-2 px-7">
          Retrieve Info
        </button>
      </div>
    </div>
  );
};

export default Navbar;
