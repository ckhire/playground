import React, { FC, useState,} from "react";


interface ComponentInfo {
  picName:any;
  name:string;
  address:string;
  location:string;
  mail:any;
  mobile:number
  deleteItem:any
}


const Card = ({picName,name,address,location,mail,mobile, deleteItem}:ComponentInfo) => {

  return (
   <>
   <div className="card" style={{width: "18rem"}}>
  <img src={picName} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Name: {name}</h5>
    <h5 className="card-title">Address: {address}</h5>
    <h5 className="card-title">Location: {location}</h5>
    <h5 className="card-title">Email: {mail}</h5>
    <h5 className="card-title">Mobile Number: {mobile}</h5>
  </div>
  <button className="btn btn-primary bg-danger" value={picName} onClick={deleteItem} >Delete </button>
</div>

   </>

  )
}

export default Card;