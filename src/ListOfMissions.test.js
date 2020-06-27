import React from 'react';
import { render } from '@testing-library/react'
import ListOfMissions from './ListOfMissions'
import { BrowserRouter as Router } from "react-router-dom";


// const missionsData = ["missionOne, missionTwo"]
const oneMission = [{mission_name: "Launch"}]


test('renders a mission name', () => {
  const { getByText } = render( <Router> <ListOfMissions missions={oneMission} /> </Router>);
  const missionName = getByText("Launch");
  expect(missionName).toBeInTheDocument();
});
