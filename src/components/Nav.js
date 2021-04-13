import React from "react";

function Nav({ Link }) {
  return (
    <footer className="Nav">
      <ul className="Navitems">
        <li className="Navitem">
          <Link to="/">日记</Link>
        </li>
        <li className="Navitem">
          <Link to="/about">统计</Link>
        </li>
        <li className="Navitem">
          <Link to="/topics">监督</Link>
        </li>
        <li className="Navitem">
          <Link to="/upload">我的</Link>
        </li>
      </ul>
    </footer>
  );
}
export default Nav;
