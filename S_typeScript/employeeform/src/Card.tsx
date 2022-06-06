import React, { FC, useState,} from "react";


interface ComponentInfo {
  pic:any;
  name:string;
  address:string;
  location:string;
  mail:any;
  mobile:number
}


const Card = ({pic,name,address,location,mail,mobile}:ComponentInfo) => {

  return (
   <>
   <div className="card" style={{width: "18rem"}}>
  <img src={pic} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Name: {name}</h5>
    <h5 className="card-title">Address: {address}</h5>
    <h5 className="card-title">Location: {location}</h5>
    <h5 className="card-title">Email: {mail}</h5>
    <h5 className="card-title">Mobile Number: {mobile}</h5>
  </div>
  <button className="btn btn-primary bg-danger" >Delete </button>
</div>

   </>

  )
}

export default Card;