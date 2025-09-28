import { useEffect, useState } from "react";
import "./App.css";
import { Menu, X } from "lucide-react";

function App() {
  const [users, setUsers] = useState({ links: [] });
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    fetch("./user.json")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const links = users.links.map((link) => (
    <li key={link.id}>
      <a href="/">{link.label}</a>
    </li>
  ));

  return (
    <>
      <nav className="flex justify-between items-center shadow-md py-4 px-2">
        <h2 className="font-bold text-2xl hidden md:block">Web Dev</h2>
        <div>
          <span onClick={() => setOpenMenu(!openMenu)} className="md:hidden">
            {openMenu ? <X />:<Menu />}
          </span>
          <ul
            className={`block md:hidden gap-3 bg-black text-white rounded-md p-3  absolute duration-1000 ${
              openMenu ? "top-20" : "-top-40"
            }`}
          >
            {links}
          </ul>
        </div>
        <ul className=" hidden md:flex justify-between items-center gap-3">
          {links}
        </ul>
        <button className="bg-linear-to-r from-green-500 to-green-300 py-2 px-3 rounded-md ">
          Explore More
        </button>
      </nav>
    </>
  );
}

export default App;
