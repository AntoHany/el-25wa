import AddProject from './AddProject';
import DeleteProject from './DeleteProject';
import './AdminPanel.css'

function AdminPanel(){
  return (
    <div className="admin container">
      <h2> 
        hi admin :
      </h2>
      <AddProject />
      <DeleteProject />
    </div>
  )
}
export default AdminPanel;