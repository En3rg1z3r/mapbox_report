<<<<<<< HEAD
<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
import ReactMapGL from "react-map-gl";
import {useState} from "react";


function App() {
  const [viewport, setViewport] = useState({
    width: 1500,
    height: 900,
    latitude: 35.369,
    longitude: 1.330,
    zoom: 12.43
  });


  return (
    <div>
     <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={"pk.eyJ1IjoiaGFtemFmZWdob3VsaSIsImEiOiJja2t2N2xmNmExMjE4MnVsbXlwcTNzdmc2In0.hacY17XkKR24Tr0Vs8PzDw"}
      mapStyle="mapbox://styles/hamzafeghouli/ckkv7wgfo3pe417pgw0e1mycw"
      onViewportChange={nextViewport => setViewport(nextViewport)}
    />     
>>>>>>> 2afe4a16ceffb98ac56caeda7b2b671221a8d1fa
=======
import { useState, useRef, setS } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Geocoder from 'react-map-gl-geocoder';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { GeoFill,ArrowRight } from 'react-bootstrap-icons';
import * as data from './data.json';
import './App.css';

function ShowPopUp(lat, lng){
  return (
    <Popup latitude={lat} longitude={lng}>
      <div>test</div>
    </Popup>
  );
}
function App() {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: 800,
    latitude: 28.375,
    longitude: 2.841,
    zoom: 4.8,
  });
  const [project,setProject] = useState(null);
  const [coordinates, setCorodinates] = useState(
    null
  );

  const mapRef = useRef();
  const geocoderContainerRef = useRef();
    
  return (
    
    <div>
      <div
        ref={geocoderContainerRef}
        style={{ position: 'absolute', top: 20, left: 20, zIndex: 1 }}
      />
      <ReactMapGL
        onClick={(e) => {
          setCorodinates({ latitude: e.lngLat[0], longitude: e.lngLat[1] });
          
        }}
        ref={mapRef}
        {...viewport}
        mapboxApiAccessToken={
          'pk.eyJ1IjoiaGFtemFmZWdob3VsaSIsImEiOiJja2t6eXUzaXowZ2ZrMnVsYjNraWx4ZnV5In0.7kdG8rQY5NbCIv2u8G8OxA'
        }
        mapStyle="mapbox://styles/hamzafeghouli/ckkz9cv100f2217n6i2c5hoxr"
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        
        {data.projects.map((prj)=>{
          <Marker 
            key={prj.key}
            longitude = {prj.longitude}
            latitude={prj.latitude}  
          >
            <button 
              onClick={(e)=>{
                e.preventDefault();
                setProject(prj);
              }}>
              <GeoFill color="white"/>
            </button>
          </Marker>
        })}
        
      {project?(
        <Popup
        latitude ={project.latitude}
        longitude = {project.longitude}> 
        <div>test</div>
        </Popup>
      ):null }

      </ReactMapGL>
      <Geocoder
        mapRef={mapRef}
        containerRef={geocoderContainerRef}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapboxApiAccessToken={'pk.eyJ1IjoiaGFtemFmZWdob3VsaSIsImEiOiJja2t6eXUzaXowZ2ZrMnVsYjNraWx4ZnV5In0.7kdG8rQY5NbCIv2u8G8OxA'}
        position="top-left"
      />
      <div>
        <h1>
          latitude {coordinates ? coordinates.latitude : 0}
          longitude {coordinates? coordinates.longitude:0 }
        </h1>
      </div>
>>>>>>> 3d18ad778dd37ab49e0730266b2fa2d3aa4fd7a3
    </div>
  );
}

export default App;
