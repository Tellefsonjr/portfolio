import React, { Component, PropTypes } from 'react';
import "../stylesheets/Projects.css";
import image from "../images/preview.jpg";

/**
 * Projects
 */
export class Projects extends Component {
  render() {
    return (
      <div className="section row justify-content-center">
        <div id="projectSection" className="col-lg-12 col-xs-12">
        <div className="text-center text-dark">
            <h3 className="display-4"> Projects </h3>
          <h3 className="lead"><small> I am proficient in...  </small></h3>
        </div>
        {/* <div className="container-fluid mobile-card-container">
          <div className="row text-center flex-nowrap flex-sm-wrap">
 */}

        <div className = "card-scroll-container d-flex flex-row flex-nowrap" >
          <div className="card card-body">
            <img className="card-img-top" src={image} alt="Card image cap" />
            <div className="card-block">
              <h4 className="card-title">Card title</h4>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div className="card card-body">
            <img className="card-img-top" src={image} alt="Card image cap" />
              <div className="card-block">
                <h4 className="card-title">Card title</h4>
              <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div className="card card-body">
              <img className="card-img-top" src={image} alt="Card image cap" />
                <div className="card-block">
                  <h4 className="card-title">Card title</h4>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              <p className="card-text">
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      //   </div>
      // </div>
    );
  }
}

// Projects.propTypes = {
//   prop: PropTypes.type.isRequired
// }

export default Projects;