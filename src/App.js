import ReactMapGL from 'react-map-gl';
import { useState } from 'react';

function App() {
  const [viewport, setViewport] = useState({
    width: 1500,
    height: 900,
    latitude: 35.369,
    longitude: 1.33,
    zoom: 12.43,
  });

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAP_TOKEN}
        mapStyle="mapbox://styles/hamzafeghouli/ckkv7wgfo3pe417pgw0e1mycw"
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      />
    </div>
  );
}

export default App;
