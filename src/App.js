import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import ListOfMissions from "./ListOfMissions"
import ShowContainer from "./ShowContainer"

const Missions = props => {
  const [missions, setMissions] = useState ([])

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
    setMissions(responseFromServer)
    })
  .catch(error => console.error(`Error in fetch
    ${error.message}`))
  }, [])

  return (
    <Router>
      <Switch>
        <Route path="/:id">
          <ShowContainer
            missions={missions}
             />
        </Route>
        <Route path="/">
          <ListOfMissions
            missions={missions}
            />
        </Route>
      </Switch>
    </Router>
  );
}

export default Missions
