import React from "react";
import image from "../images/openhand.png"
import "../css/home.css"
class HomeComponent extends React.Component{

    render(){
        return(
            <div className="home_container">
                
                <div className="home_sub_container">
                <img className="home_image_container" src={image} alt="open-hand" srcset="" />

                </div>
                <div  className="home_sub_container">
                <span className="font_style created_by" > Created By Rohan Ravindra Kadam </span>
                <span className="font_style game_title" > Rock Paper Scissor </span>
                <div  className="font_style btn_let_play" >Lets Play</div>
                </div>
                
                
                 

            </div>
        )
    }
}
export default HomeComponent;