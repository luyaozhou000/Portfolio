import React from "react";
import "./Video.scss";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

class Video extends React.Component {
  state = {
    playing: false
  };

  whenPlayClicked = () => {
    this.setState({
      playing: true
    });
  };

  whenPauseClicked = () => {
    this.setState({
      playing: false
    });
  };

  render() {
    return (
      <>
       
        <div className="project">
       
          <div className="project__button">
            <button className="project__button--title">My Projects</button>
            <figure className="poping-bubble"></figure>
            <figure className="poping-bubble"></figure>
            <figure className="poping-bubble"></figure>
            <figure className="poping-bubble"></figure>
          </div>
       

          <div className="project__btn-wrapper">
          <h3 className="project__jump">Jump!</h3>
            <button
              className="project__play-btn"
              onClick={this.whenPlayClicked}
            >
              Play Demo
            </button>

            <button
              className="project__pause-btn"
              onClick={this.whenPauseClicked}
            >
              Pause Demo
            </button>
          </div>

          <ReactPlayer
            className="project__video"
            url={this.props.src}
            playing={this.state.playing}
            width="50rem"
            height="33rem"
          />

          <div className="project__description">
            
            <div className="project__description--tech">
              React/Node.JS/Express/Google API/Mailgun API
            </div>
            <div className="project__description--details">
              This website helps users find a dog walker in their neighborhood.
              The dog walking company will receive a notification email once a
              user fills out a form and hits submit. All available dog walkers
              can be viewed on google map along with their names and ratings.
            </div>
          </div>

         
        </div>
      </>
    );
  }
}

export default Video;
