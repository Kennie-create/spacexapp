import React from 'react';
import { render } from '@testing-library/react';
import ShowContainer from './ShowContainer';
import { Route, MemoryRouter } from "react-router-dom";


const data = [{mission_name: "Falcon", details: "Engine failure at 33 seconds and loss of vehicle", rocket: {rocket_id: "falcon1", rocket_name: "Falcon 1"}, launch_site:{}, links:{}, launch_year: "2006"}]

test('renders mission details', () => {
  const { getByText } = render(<MemoryRouter initialEntries={["/Falcon"]}>
  <Route path="/:id">
  <ShowContainer missions={data} />
  </Route>
  </MemoryRouter>);

  const dataDetails = getByText("Engine failure at 33 seconds and loss of vehicle", {exact: false});
  const dataRocketId = getByText("falcon1", {exact: false})
  const dataRocketName = getByText("Falcon 1", {exact: false})
  const dataYear = getByText("2006", {exact: false})

  expect(dataDetails).toBeInTheDocument();
  expect(dataRocketId).toBeInTheDocument();
  expect(dataRocketName).toBeInTheDocument();
  expect(dataYear).toBeInTheDocument();
 });
