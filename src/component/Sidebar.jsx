import React from 'react';

const items = [
  "recent",
  "basic concepts in react",
  "react router dom full tree strecture",
  "redux tool kit and store functions",
  "next js core concepts",
  "important concepts in react",
  "noje js server connection",
  "firebase data storing system"
];

const list = items.map((list, index) => (
  <li key={index} className="mt-3.5 truncate ms-4 hidden group-hover:block">
    {list.length > 25 ? list.slice(0, 25) + "..." : list}
  </li>
));

const Sidebar = () => {
  return (
    <div className="main flex">
      {/* Sidebar */}
      <div className=" sidebar group h-screen bg-white transition-all duration-500 w-[60px] hover:w-[250px] overflow-hidden">
        <div className="menu p-4 text-black">
          <i className="fa-solid fa-bars"></i>
          <br /><br /><br />
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-pen-to-square"></i>
            <span className="hidden group-hover:inline whitespace-nowrap">New Chat</span>
          </div>
          <br /><br />
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-gem"></i>
            <span className="hidden group-hover:inline whitespace-nowrap">Explore Gems</span>
          </div>
        </div>

        <ul className="mt-10 ms-4 text-black font-light">
          {list}
        </ul>

        <div className="setting absolute bottom-4 left-4 flex items-center gap-2">
          <i className="fa-solid fa-gear"></i>
          <span className="hidden group-hover:inline whitespace-nowrap">Settings and Help</span>
        </div>
      </div>

      {/* Main content */}
      <div className="developer flex-1 p-6">
        <p className="text-xl font-thin">Gemini-Clone</p>
        <p className='ms-1 bg-blue-100 rounded-2xl w-[80px] px-1'>1.5 Flash</p>
      </div>
    </div>
  );
};

export default Sidebar;
