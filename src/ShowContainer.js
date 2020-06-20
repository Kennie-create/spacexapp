import React from "react"
import { useParams } from "react-router-dom"

export default function ShowContainer() {

  let { id } = useParams();

  return(
    <p> hey {id}
    </p>
  )
}
