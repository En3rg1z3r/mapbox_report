import React, { Component } from 'react';
import { getProjects } from '../data';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';

class Projects extends Component {
  state = {
    projects: [],
    viewport: {
      width: 1500,
      height: 900,
      latitude: 35.369,
      longitude: 1.33,
      zoom: 12.43,
    },
    showPopup: false,
  };
  componentDidMount() {
    const projects = getProjects();
    this.setState({ projects });
  }
  handleOnChangeViewPort(viewport) {
    this.setState({ viewport });
  }
  handleToggelPopup(project) {
    const { selectedProject } = this.state;
    const showPopup = !this.state.showPopup;
    if (project === selectedProject) this.setState({ showPopup });
    else {
      this.setState({ selectedProject: project, showPopup: true });
    }
  }
  render() {
    const { viewport, projects, selectedProject, showPopup } = this.state;
    return (
      <div>
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={
            'pk.eyJ1IjoiaGFtemFmZWdob3VsaSIsImEiOiJja2t2N2xmNmExMjE4MnVsbXlwcTNzdmc2In0.hacY17XkKR24Tr0Vs8PzDw'
          }
          mapStyle="mapbox://styles/hamzafeghouli/ckkv7wgfo3pe417pgw0e1mycw"
          onViewportChange={(nextViewport) =>
            this.handleOnChangeViewPort(nextViewport)
          }
        >
          {projects.map((project) => (
            <Marker
              key={project.key}
              longitude={project.longitude}
              latitude={project.latitude}
            >
              <i
                className="fa fa-times icons"
                style={{ color: project.state.color }}
                onClick={() => this.handleToggelPopup(project)}
              ></i>
            </Marker>
          ))}

          {showPopup && (
            <Popup
              latitude={selectedProject.latitude}
              longitude={selectedProject.longitude}
              closeButton={false}
              closeOnClick={true}
              onClose={() => this.setState({ showPopup: false })}
              anchor="top"
            >
              <div>{selectedProject.name}</div>
            </Popup>
          )}
        </ReactMapGL>
      </div>
    );
  }
}

export default Projects;
