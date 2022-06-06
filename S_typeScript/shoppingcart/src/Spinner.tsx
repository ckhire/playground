import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
const Spinner = () => {
  return (
    <div style={{display:'flex' , flexDirection:'row',margin:'20% ', marginLeft:'40%', width:'250px'}}>
     <div style={{ }}>
        <span style={{fontSize:'24px', fontWeight:'Bold', marginRight:'5%' }}>Loading Cart Items</span>
      </div>
       <div>
        <CircularProgress size={50} />
      </div>
    </div>
  );
};
export default Spinner;