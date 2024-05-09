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
    <li key={li.id}>
      <Link to={li.go}>{li.name}</Link>
    </li>
  ))
  return(
    <ul id="navLink">
      {link}
    </ul>
  )
}

function BurgerButton(){
  function handleClickBB(e){
    let navLinks = document.getElementById('navLink');
    navLinks.style.display === 'block'? navLinks.style.display = 'none': navLinks.style.display = 'block';
    e.target.classList.toggle("active");
  }
  return(
    <div className="burger-btn" onClick={handleClickBB}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

function Header(){
  return(
    <header className="container">
      <Logo />
      <NavLink />
      <BurgerButton />
    </header>
  )
}
export default Header;
