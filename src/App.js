import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import ListOfMissions from "./ListOfMissions"
import ShowContainer from "./ShowContainer"


// Sometimes you don't know all the possible routes
// for your application up front; for example, when
// building a file-system browsing UI or determining
// URLs dynamically based on data. In these situations,
// it helps to have a dynamic router that is able
// to generate routes as needed at runtime.
//
// This example lets you drill down into a friends
// list recursively, viewing each user's friend list
// along the way. As you drill down, notice each segment
// being added to the URL. You can copy/paste this link
// to someone else and they will see the same UI.
//
// Then click the back button and watch the last
// segment of the URL disappear along with the last
// friend list.

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
    <ListOfMissions
      Missions={missions}
      />
  )
}

// export default function RecursiveExample() {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/:id">
//           <ShowContainer
//             Missions={Missions}
//              />
//         </Route>
//         <Route path="/">
//           <ListOfMissions
//             />
//         </Route>
//       </Switch>
//     </Router>
//   );
// }

export default Missions
