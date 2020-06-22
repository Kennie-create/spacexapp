import React from "react"
import { Link } from "react-router-dom"

export default function ListOfMissions(props) {

  const eachMissionInfo = props.missions.map(info => {
        return(
          <li key={info.mission_name}>            
            <Link to={info.mission_name}>
              {info.mission_name}
            </Link>
          </li>
        )
      }
)
  return (
    <>
      <h1> SpaceX API : </h1>
      <ul>{eachMissionInfo}</ul>
    </>
  )
}


// function Mission() {
//   let { url } = useRouteMatch();
//   let { id } = useParams();
//
//
//     )
//
// }
