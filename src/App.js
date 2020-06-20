import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
  useRouteMatch
} from "react-router-dom";
import IndexContainer from "./IndexContainer"
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

export default function RecursiveExample() {
  return (
    <Router>
      <Switch>
        <Route path="/:id">
          <ShowContainer
            Missions={Missions}
             />
        </Route>
        <Route path="/">
          <Mission />
        </Route>
      </Switch>
    </Router>
  );
}

function Mission() {
  let { url } = useRouteMatch();
  let { id } = useParams();
  let mission = find(parseInt(id));

  return (
    <div>
      <h3>SpaceX Missions</h3>

      <ul>
        {Missions.map(mission => (
          <li key={mission.id}>
          <Link to={`${mission.id}`}>{mission.name}</Link>
          </li>
        ))}
      </ul>

      <Switch>
        <Route path={`${url}/:id`}>
          <Mission />
        </Route>
      </Switch>
    </div>
  );
}

const Missions = [
  { id: 0, name: "Mission 1", friends: [1, 2, 3] },
  { id: 1, name: "Mission 2", friends: [0, 3] },
  { id: 2, name: "Mission 3", friends: [0, 1, 3] },
  { id: 3, name: "Mission 4", friends: [1, 2] }
];

function find(id) {
  return Missions.find(p => p.id === id);
}
