import React from "react";

export default function Header({info}){
  console.log(info)
  // console.log("this is inside header file",name)
  return(
    <div style={{backgroundColor:"red"}}>
     <h3>{info.name}</h3>
      <h5>{info.age}</h5>
    </div>
  )
}