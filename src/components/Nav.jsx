import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/img/logo.svg";

export default function Nav() {
  const location = useLocation().pathname;

  const [navLink, setNavLink] = useState("");
  const [navURL, setNavURL] = useState("");

  useEffect(() => {
    if (location === "/zhansen/") {
      setNavLink("Blog");
      setNavURL("/zhansen/blog");
    } else {
      setNavLink("Home");
      setNavURL("/zhansen/");
    }
  }, [location]);


  return (
    <nav>
      <div className="container flex-box">
        <Link to={"/zhansen/"}>
          <img src={logo} alt="Alerrad" id="logo" />
        </Link>
        <Link to={navURL}>
          {navLink}
        </Link>
      </div>
    </nav>
  );
}
