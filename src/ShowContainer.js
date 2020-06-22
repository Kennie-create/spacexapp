import React from "react"
import { useParams } from "react-router-dom"

const ShowContainer = (props) => {

  let { id } = useParams();

  const specifics = props.missions.find((mission)=>{
    return mission.mission_name === id
  }
)
if(!specifics){return(null)}

  return(
    <p>{specifics.mission_name}
    </p>
  )
}

export default ShowContainer
