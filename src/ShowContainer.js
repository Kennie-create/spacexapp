import React from "react"
import { useParams } from "react-router-dom"

const ShowContainer = (props) => {

  let { id } = useParams();

  const specifics = props.missions.find((mission)=>{
    return mission.mission_name === id
  })
if(!specifics){return(null)}

  return(
    <div>
      <li>
        Flight Number:{specifics.flight_number},
        Launch Year: {specifics.launch_year}
      </li>
    </div>

  )
}

export default ShowContainer
