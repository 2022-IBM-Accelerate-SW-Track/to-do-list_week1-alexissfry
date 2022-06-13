import React, { Component, Profiler } from 'react';
import "./About.css";
import profile_pic from "../assets/profile.png";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <p>
        <div>
          <div class="split left">
            <div className="centered">
              <img 
                className="profile_image"
                src = {profile_pic}
                alt="Profile Pic"
                ></img>
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title">Alexis Fry</div>
              <div className="brief_description">
                Hi! I'm a rising sophomore at Brown University studying Computer Science. I'm interning at a startup called Veritonic in NYC this summer and am excited for the rest of IBM Accelerate!
              </div>
            </div>
          </div>
        </div>
        </p> 
      </div>
    )
  }
}