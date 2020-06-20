import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import IndexContainer from "./IndexContainer"
import ShowContainer from "./ShowContainer"

const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={IndexContainer}/>
        <Route exact path="/launches/id" component={ShowContainer}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
