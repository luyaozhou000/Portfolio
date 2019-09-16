import React from "react";
import "./Main.scss";
import Header from "../Header/Header";
import Profile from "../../component/Profile/Profile";
import Video from "../../component/Video/Video";
import jump from "../../assets/video/Jump.mp4";

class Main extends React.Component {
    render() {
        return (
            <div className="main">
             <Header/>
             <Profile/>
             <Video src={jump} />

             <div className="bubble one"></div>
             <div className="bubble two"></div>
             <div className="bubble three"></div>
             <div className="bubble four"></div>
             <div className="bubble five"></div>
            </div>
        )
    }
}

export default Main