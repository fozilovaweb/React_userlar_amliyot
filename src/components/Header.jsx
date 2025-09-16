import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div class="navbar bg-base-100 shadow-sm">
      <div className="container flex">
        <div class="flex-1">
          <Link class="btn btn-ghost text-xl" to={"/"}>
            User name
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
