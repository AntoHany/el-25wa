import { Link } from "react-router-dom";
import './ErrorPage.css'

function ErrorPage(){
  return(
    <div className="Error">
      <h3>لايتوفر صفحات بهذا الاسم <Link to='/'>الرئيسية</Link></h3>
      
      <span>Err<i class="fa-regular fa-face-tired"></i>r</span>
    </div>
  )
}
export default ErrorPage;