import AddProject from './AddProject';
import DeleteProject from './DeleteProject';
import './AdminPanel.css'
import { useState } from 'react';

function AdminPanel(){
  const [update, setUpdate] = useState(false);

  function handelUpdate(){
    setUpdate(true);
  }
  return (
    <div className="admin container">
      <h2> 
        hi admin :
      </h2>
      <AddProject handelUpdate={handelUpdate}/>
      <DeleteProject update={update}/>
    </div>
  )
}
export default AdminPanel;