import { Link } from 'react-router-dom';
import './Text.css'
function Text(){
  return(
    <div className='text container'>  
      <h3>
        الأخوة لأعمال الألوميتال :
      </h3>
      <span>
        <li>جميع اعمال الألوميتال جميع  القطاعات </li>
        <li>مطابخ الوميتال وخشمونيوم وأكريليك وكلادينج </li>
        <li>ابواب وشبابيك الوميتال </li>   
        <li>جميع قطاعات الابواب والشبابيك الألوميتال ( جامبو - تانجو - ps )</li>
        <li>شيش حصيرة و سلك بليسية </li>  
      </span>
        نقدم لكم ارقى التصاميم باجود الخامات
        لرؤيه الاعمال <Link to={'/work'}>اضغط هنا</Link>
    </div>
  )
}
export default Text;