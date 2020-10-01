import React from "react"


const PurpleButton=(props)=>{
 return(
    <>
    <button  onClick={props.onClick} style={{backgroundColor:"purple",}}>
       {props.label}
      </button>
    </>

 )
 
}







export default PurpleButton;