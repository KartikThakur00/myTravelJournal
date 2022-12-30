import React from "react";
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data.json"
import "./app.css"
export default  function App(){
  const Cards = data.map(item=>{
    return(
      <Card
        key={item.id}
        {...item}
      />
    )
  })
     return (
    <>
      <Navbar/>
      {Cards}
      </>
  )
}

