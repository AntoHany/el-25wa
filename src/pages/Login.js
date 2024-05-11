function Login(){
  return(
    <div className="login">
      <h3>
        تسجيل الدخول      
      </h3>
      <div className="form"> 
        <input type="text" placeholder="اسم المستخدم"/>
        <input type="password" placeholder="الرقم السري"/>
        <button>ارسال</button>
      </div>
    </div>
  )
}
export default Login;