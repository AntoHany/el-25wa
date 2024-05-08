import { useContext } from "react";
import {logoText, navLinks} from "../context/context"

import './Header.css'
import { Link } from "react-router-dom";

function Logo(){
  const logo = useContext(logoText);
  return(
    <h2>
      <Link to={'/'}>{logo}</Link>
    </h2>
  )
}

function NavLink(){
  const links = useContext(navLinks);
  let link = links.map((li) => (
    <li key={li}>
      <a href={li}>{li}</a>
    </li>
  ))
  return(
    <ul>
      {link}
    </ul>
  )
}

function Header(){
  return(
    <header className="container">
      <Logo />
      <NavLink />
    </header>
  )
}
export default Header;
