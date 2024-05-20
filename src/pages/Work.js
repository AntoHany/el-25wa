import { useEffect, useState } from "react";
import Header from "../componant/Header";
import './Work.css'

function WorkNavLink({handleClickNav, activeLink}){
  let myNavLinks = document.querySelectorAll('#nav span');
  myNavLinks.forEach((ele) => {
    if (ele.id === activeLink){
      ele.classList.add('active');
    }
  });
  return(
    <nav id="nav" className="work-nav-link container">
      <span onClick={handleClickNav} id="all" className="active">الكل </span>
      <span onClick={handleClickNav} id="kitchen">مطابخ </span>
      <span onClick={handleClickNav} id="door">ابواب </span>
      <span onClick={handleClickNav} id="window">شبابيك</span>
    </nav>
  )
}

function Galary({activeLink}){
  
  const [project, setProject] = useState([])

  const url = 'https://elekwoa.onrender.com/get/projects';
  const getProjects = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setProject(data);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    getProjects();
  }, [])
  
  
  function createImages(filterImages){
    let images = filterImages.map((ele) => (
    <div key={ele.id}>
      <div className="image">
        <img alt={ele.type} src={ele.image}/>
      </div>
      <p>{ele.title}</p>
    </div>
    ));
    return images;
  }

  let images;
  if (activeLink !== 'all'){
    let filterImages = project.filter((ele) => {
      return ele.type === activeLink;
    });
    images = createImages(filterImages);
  }else {
    images = createImages(project);
  } 

  return(
    <div className="galary">
      {images}
    </div>
  )
}

function Work(){

  let myNavLinks = document.querySelectorAll('#nav span');
  
  const [navLink, setNavLink] = useState('all');

  function handleClickNav(e){
    myNavLinks.forEach(ele => {
      if (ele.classList.contains('active')){
        ele.classList.remove('active');
      }
    });
    setNavLink(e.target.id);
  }
  

  return(
    <>
      <Header />
      <WorkNavLink handleClickNav={handleClickNav} activeLink={navLink}/>
      <Galary activeLink={navLink}/>
    </>
  )
}
export default Work;