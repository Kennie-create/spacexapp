import React from "react"
import { Link } from "react-router-dom"

export default function ListOfMissions(props) {

  const eachMissionInfo = props.missions.map(info => {
        return(
          <li key={info.mission_name}>
            <Link to={info.mission_name} className="missions">
              {info.mission_name}
            </Link>
          </li>
        )
      }
)
  return (
    <div className="stars-index">
      <h1 className="title"> List of SpaceX Missions : </h1>
        <ul>{eachMissionInfo}</ul>
    </div>
  )
}
