import React from "react"
import { useParams } from "react-router-dom"

const ShowContainer = (props) => {

  let { id } = useParams();

  const specifics = props.missions.find((mission)=>{
    return mission.mission_name === id
  })
if(!specifics){return(null)}
debugger

  return(
    <div class="stars-details">
      <h1 class="details-title">Mission details </h1>
      <div class="mission-details">
       <ul>About this mission : {specifics.details}</ul>
        <ul>Rocket Name : {specifics.rocket.rocket_name}</ul>
        <ul>Rocket Type : {specifics.rocket.rocket_type}</ul>
        <ul>Rocket ID :{specifics.rocket.rocket_id}</ul>
        <ul>Flight Number : {specifics.flight_number}</ul>
        <ul>Launch Year : {specifics.launch_year}</ul>
        <ul>Launch Window : {specifics.launch_window}</ul>
        <ul>Site Name : {specifics.launch_site.site_name}</ul>
        <ul>Site ID : {specifics.launch_site.site_id}</ul>
        <ul>Mission Logo : {specifics.links.mission_patch}</ul>
      </div>
    </div>

  )
}

export default ShowContainer
