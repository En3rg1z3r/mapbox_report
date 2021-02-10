import ReactMapGL from "react-map-gl";
import {useState,useRef,setS} from "react";
import {Row, Col, Container} from "react-bootstrap";
import Geocoder from "react-map-gl-geocoder";
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'




function App() {
  
  const [viewport, setViewport] = useState({
    width: "100%",
    height: 800,
    latitude: 28.375,
    longitude: 2.841,
    zoom: 4.80
  });
  
  const [coordinates,setCorodinates] = useState({
    latitude:0,
    longtitude:0
  });

  const mapRef = useRef();
  const geocoderContainerRef = useRef();

  

  return (

    <div>
      
      <div
        ref={geocoderContainerRef}
        style={{ position: "absolute", top: 20, left: 20, zIndex: 1 }}
      />
    <ReactMapGL
    onClick={(e)=>{setCorodinates({latitude : e.lngLat[0], longtitude : e.lngLat[1] })}}
    ref={mapRef}
    {...viewport}
    mapboxApiAccessToken={"pk.eyJ1IjoiaGFtemFmZWdob3VsaSIsImEiOiJja2t6eXUzaXowZ2ZrMnVsYjNraWx4ZnV5In0.7kdG8rQY5NbCIv2u8G8OxA"}
    mapStyle="mapbox://styles/hamzafeghouli/ckkz9cv100f2217n6i2c5hoxr"
    onViewportChange={nextViewport => setViewport(nextViewport)}>
    </ReactMapGL>
    <Geocoder
          mapRef={mapRef}
          containerRef={geocoderContainerRef}
          onViewportChange={nextViewport => setViewport(nextViewport)}
          mapboxApiAccessToken={"pk.eyJ1IjoiaGFtemFmZWdob3VsaSIsImEiOiJja2t6eXUzaXowZ2ZrMnVsYjNraWx4ZnV5In0.7kdG8rQY5NbCIv2u8G8OxA"}
          position="top-left"
        />
    <div>
        <h1>
          latitude {coordinates.latitude}
          longitude {coordinates.longtitude}
        </h1>
      </div>
    </div>
  
 
  );
}

export default App;

