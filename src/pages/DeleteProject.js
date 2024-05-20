import axios from "axios";
import { useEffect, useRef, useState } from "react";
import "./DeleteProject.css"

function DeleteProject(){

  const form = useRef();
  const listOfProjects = useRef([]);

  // filter the project will deleted in array 
  // most thing i try hard :( 
  function handlecheck(e){
    if (e.target.checked){
      listOfProjects.current = [...listOfProjects.current, e.target.id];
      listOfProjects.current = [...new Set(listOfProjects.current)];
    }else{
      listOfProjects.current = listOfProjects.current.filter((ele)=> {
        return ele !== e.target.id;
      })
    }
  }
  
  async function handleSubmit(e){
    e.preventDefault();
    const Url = "http://localhost:5000/post/deleteprojects";
    try {
      await axios.post(Url, listOfProjects.current);
      document.getElementById('message').textContent = 'Data Sent Successfully';
    } catch (error){
      document.getElementById('message').textContent = `You Have An Error At Sending Data: ${error}`;
    }
    window.location.reload();  
  }
  
  const [project, setProject] = useState([])

  const url = 'http://localhost:5000/get/projects';
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
  // id title type image
  let deleteProject = project.map((ele) => (
    <>
      <label for={ele.id} key={ele.id}>
        <div>
          <input id={ele.id} type="checkbox" onChange={handlecheck}/>
          <p>{ele.title}</p>
        </div>
        <img alt={`${ele.type} image`} src={ele.image}/>
      </label>
      <hr/>
    </>
      
  ));
  if (project.length === 0){
    return(
     <div className="delete">
       <h2>
        لا يتوفر مشاريع
       </h2>
     </div>
    )
  }
  return(
    <div className="delete">
      <h3> حذف المشروع :-</h3>
      <form ref={form} onSubmit={handleSubmit}>
        {deleteProject}
        <button type="submit">حذف</button>
      </form>
      <p id='message'></p>
    </div>
  )
}
export default DeleteProject;