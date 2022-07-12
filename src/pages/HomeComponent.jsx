import React from "react";
import image from "../images/openhand.png"

class HomeComponent extends React.Component{

    render(){
        return(
            <div style={{backgroundColor:"#9c27b0",width:"100%",height:"100vh" ,display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}} className="home">
                
                <div style={{backgroundColor:"#9c27b0",width:"40%",height:"50vh" ,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                <img style={{height:"100vh"}} src={image} alt="open-hand" srcset="" />

                </div>
                <div style={{backgroundColor:"#9c27b0",width:"40%",height:"50vh" ,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
                <span style={{color:"white" ,fontFamily:'Poppins',width:"100%",}}> Created By Rohan Ravindra Kadam </span>
                <span style={{color:"white" ,fontFamily:'Poppins' ,width:"100%",fontSize:"42px" }}> Rock Paper Scissor </span>
                </div>
                
                 

            </div>
        )
    }
}
export default HomeComponent;