import React from "react";
import { Link } from "react-router-dom";

const sitenaveLink = [
  {
    path: "/",
    text: "Home",
    id: 1,
  },
  {
    path: "/about",
    text: "About",
    id: 2,
  },
  {
    path: "/contact",
    text: "Contact",
    id: 3,
  },
];

function Sitenav() {
  return (
    <nav>
      <ul className="flex items-center gap-6">
        {sitenaveLink.map((link) => {
          return (
            <li key={link.id}>
              <Link to={link.path}>{link.text}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Sitenav;
