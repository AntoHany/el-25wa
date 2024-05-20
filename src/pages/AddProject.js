import { useRef, useState } from "react";
import convertToBase64 from "../helper/convertImage";
import axios from 'axios';

import './AddProject.css'

function AddProject() {

  const form = useRef();
  const title = useRef();
  const file = useRef();
  const type = useRef();

  const [base64String, setBase64String] = useState('');
  const handleImageInputChange = async (event) => {
      const file = event.target.files[0];
      if (file) {
        const base64 = await convertToBase64(file);
        setBase64String(base64);
      }
  };

  async function handleSubmit(e){
    e.preventDefault();

    const Url = "http://localhost:5000";

    const newProject = {
      title: title.current.value,
      image: base64String,
      type: type.current.value,
    }
    try {
      await axios.post(`${Url}/post/newproject`, newProject);
      document.getElementById('messageSend').textContent = 'Data Sent Successfully'
    } catch (error){
      document.getElementById('messageSend').textContent = `You Have An Error At Sending Data: ${error}`;
    } 
    finally {
      form.current.reset();
    }
  }

  return (
    <div className="add-project">
      <h3>
        اضافه مشروع :-
      </h3>

      <form ref={form} onSubmit={handleSubmit}>
        <label for="title"> وصف المشروع :
          <input id="title" type="text" placeholder="وصف المشروع" ref={title} required/>
        </label>

        <label for="file"> صوره المشروع :
          <input id="file" type="file" onChange={handleImageInputChange} ref={file} required/>
        </label>

        <label for="select"> نوع المشروع :
          <select id='select' ref={type} >
            <option value="door">باب</option>
            <option value="window">شباك</option>
            <option value="kitchen">مطبخ</option>
          </select>
        </label>

        <button type="submit">ارسل</button>
      </form>
      <p id='messageSend'></p>
    </div>
  );
}
export default AddProject;