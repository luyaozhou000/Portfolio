import React from "react";
import "./Profile.scss";
import yaya from "../../assets/yaya.jpg";

class Profile extends React.Component {
    render() {
        return(
            <div className="profile">
             <img className="profile__img" src={yaya} alt="mypic" />
             <div className="profile__name typing-animation">Hi, I am Luyao Zhou. Full-Stack web developer 
             dedicated to turning ideas into reality.</div>
             
            </div>
        )
    }
}



export default Profile 