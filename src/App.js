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
    </div>
  );
}

export default App;
