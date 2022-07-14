import React from "react";
import "../css/playground.css"
import paperHand from "../images/openhand.png"
import rockHand from "../images/rockhand.png"
import scissorHand from "../images/scissorhand.png"

class PlayGroundComponent extends React.Component {

    selectedOption(option) {
        console.log(option);
    }


    render() {
        return (
            <div className="playground">
                <div className="ground">
                    <img className="computer_option" src={rockHand} alt="rock-hand" />
                    <img className="player_option" src={paperHand} alt="paper-hand" />
                </div>
                <div className="player_side_option">
                        <span className="pick_a_option">Pick A Option</span>
                        <div className="option_container">
                            <img onClick={(e) => this.selectedOption("rock", e)} className="option_image_rock" src={rockHand} alt="rock-hand" />
                            <img onClick={(e) => this.selectedOption("paper", e)} className="option_image_paper" src={paperHand} alt="paper-hand" />
                            <img onClick={(e) => this.selectedOption("scissor", e)} className="option_image_scissors" src={scissorHand} alt="scissor-hand" />

                        </div>
                    </div>

            </div>
        )
    }

}
export default PlayGroundComponent;