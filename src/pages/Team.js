import { getTeamMember } from "../Api/ApiFetching";
import Header from "../componant/Header";
import './Team.css'

function Nav(){
  return(
    <h3>
      يتكون فريق العمل من :
    </h3>
  )
}

function Member({team}){
  let member = team.map((ele) => (
    <div key={ele.id} className="member">

      <div className="image">
        <img alt={ele.name} src={require(`../images/${ele.image}`)}/>
      </div>

      <p>الاسم: {ele.name}</p>
      <a target="_blank" href={ele.faceLink}><i class="fa-brands fa-facebook"></i></a>
      <a target="_blank" href={ele.instaLink}><i class="fa-brands fa-instagram"></i></a>
      <a target="_blank" href={`https://wa.me/${ele.whatsappLink}`}><i class="fa-brands fa-whatsapp"></i></a>
    </div>
  ))


  return(
    <div className="member-section container">
      <Nav />
      {member}
    </div>
  )
}

function Team(){
  
  let teamData = getTeamMember();
  // console.log(teamData);

  return(
    <div className="team">
      <Header />
      
      <Member team={teamData}/>
    </div>
  )
}
export default Team;