import React, {useState, useEffect} from "react"
import OneMission from "./OneMission"

const AllInfo = props => {
  const [info, setInfo] = useState ([])

  useEffect (() => {
  fetch('https://api.spacexdata.com/v3/launches')
  .then(response =>{
    if(response.ok){
      return response;
      } else {
        let errorMessage = `${response.status}
        (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error)
      }
    })
  .then(response => response.json())
  .then(responseFromServer =>{
    setInfo(responseFromServer)
    })
  .catch(error => console.error(`Error in fetch
    ${error.message}`))
  }, [])

  const eachMissionInfo = info.map(info =>{
    return (
      <OneMission
        key={info.mission_name}
        missionName={info.mission_name}
        flightNumber={info.flight_number}
      />
    )
  })

  return (
    <div>
      <h1> SpaceX API : </h1>
        {eachMissionInfo}
    </div>
  )
}

export default AllInfo;
