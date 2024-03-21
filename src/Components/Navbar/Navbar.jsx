import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

import PropTypes from "prop-types";
import Link from "../Link/Link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/dashboard", name: "Dashboard" },
  ];
  return (
    <nav>
      <div className="text-2xl md:hidden" onClick={() => setOpen(!open)}>
        {open === true ? <IoClose /> : <TiThMenu />}
      </div>
      <ul
        className={`md:flex absolute  md:static
         duration-1000  
        
          ${open ? "top-16" : "-top-60"}
        shadow-2xl px-6 `}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  
};

export default Navbar;
