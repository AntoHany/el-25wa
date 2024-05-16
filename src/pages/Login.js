import checkDataIsValid from "../helper/bcrypt";
import { useState } from "react";
import AdminPanel from './AdminPanel'
import './login.css';

function Login(){

  const initialValue = {
    name : '',
    password: '',
  }

  const [userData, setUserData] = useState('');
  const [valid, setValid] = useState(false);

  if (valid){
    return <AdminPanel/>
  }

  function submitForm(e){
    e.preventDefault();
    setValid(checkDataIsValid(userData));
    if (!valid){
      document.getElementById('message').textContent = 'خطا في اسم المستخدم او كلمه المرور'
    }  
  }

  function handleChangeName(e){
    setUserData({
      ...userData,
      name: e.target.value,
    })
  }

  function handleChangePassword(e){
    setUserData({
      ...userData,
      password: e.target.value,
    })
  }
  
  return(
    <div className="login container">
      <h3>
        تسجيل الدخول :
      </h3>
      <form className="form" onSubmit={submitForm}> 
        <input required id="userName" type="text" placeholder="اسم المستخدم" onChange={handleChangeName}/>
        <div>
        <input required id="password" type="password" placeholder="الرقم السري" onChange={handleChangePassword}/>
        <span className="eye" onClick={(e)=>{
          let myEle = document.getElementById('password');
          myEle.getAttribute('type') === 'password'? myEle.setAttribute('type', 'text'): myEle.setAttribute('type', 'password');
        }}>
          <i class="fa-solid fa-eye"></i>
        </span>
        </div>
        <button type="submit">ارسال</button>
        <p id="message"></p>
      </form>
    </div>
  )
}
export default Login;