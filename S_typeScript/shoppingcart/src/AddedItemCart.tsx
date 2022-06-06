import React,{useState,useEffect,FC} from 'react'


interface ItemName {
    title:string;
    imageName:string;
    id:number;
    category:string;
    price:number
}

const AddedItemCart : FC<ItemName> = ({imageName,title,id,category,price}) => {
  return (
    <div>

<div
      className="card"
      style={{ width: "400px", height: "500px", margin: "5px" , marginLeft:"15%" }}
    >
      <img
        src={imageName}
        className="card-img-top"
        alt="..."
        height={250}
        width={350}
      />
      <div className="card-body">
        <h5 className="card-title"> {id}</h5>
        <h5 className="card-title">Title: {title}</h5>
        <h5 className="card-title">Category : {category}</h5>
        <h5 className="card-title">Price. {price}</h5>
        {/* <p className="card-text">{ele.description}</p> */}
        <button className='btn btn-danger' >
        Remove Item
        </button>
      </div>
    </div>

    </div>
  )
}

export default AddedItemCart