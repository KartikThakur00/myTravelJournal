import React from "react";
export default function Card(props) {
  return (
    <>
    {(props.id!=="1")?<div className="line"></div>:null}
    <div className="card">

      <img src={props.imageUrl} className="card-img" alt="photo"/>
      <div className="card-info">
        <div className="first-line">
        <img src="./images/location.svg" className="location-img" alt="pin"/>
        <p className="location-name">{props.location.toUpperCase()}</p>
        <a href={props.googleMapsUrl} className="location-link">Google Maps</a>
        </div>
        <p className="title">{props.title}</p>
        <p className="date">{props.startDate} - {props.endDate}</p>
        <p className="description">{props.description}</p>
      </div>
    </div>
    </>
  );
}
