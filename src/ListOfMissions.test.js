import React from 'react';
import { render } from '@testing-library/react'
import ListOfMissions from './ListOfMissions'
import { BrowserRouter as Router } from "react-router-dom";


const missionData = [{mission_name: "Launch"},{mission_name: "Rocket"}]

test('renders a list of missions', () => {
  const { getByText } = render( <Router> <ListOfMissions missions={missionData} /> </Router>);
  const missionName1 = getByText("Launch");
  const missionName2 = getByText("Rocket");
  
  expect(missionName1).toBeInTheDocument();
  expect(missionName2).toBeInTheDocument();
});
