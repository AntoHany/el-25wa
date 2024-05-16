
function AddProject(){
  return(
    <div className="add-project">
      <form>
        <input type="text" placeholder="title" required /> 
        <input type="file" required /> 
        <input id="" type="" placeholder="" required /> 
        <input value="ارسل"/> 
      </form>
    </div>
  )
}

function AdminPanel(){
  return (
    <div className="admin">
      <h2> 
        hi admin
      </h2>
      <AddProject />
    </div>
  )
}
export default AdminPanel;