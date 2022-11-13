import ReactDOM from 'react-dom';
import React from 'react'
import GoogleMapReact from 'google-map-react';

//import 'bootstrap/dist/css/bootstrap.min.css';
//import Navbar from "./components/Navbar/Navbar.js";

export default App;

const AnyReactComponent = ({ text, color }) => (
  <div style={{
    color: 'black', 
    background: color,
    padding: '2px 2px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);

class SimpleMap extends React.Component {
  static defaultProps = {
    center: {lat: 32.99, lng: -96.75},
    zoom: 11
  };

  render() {
    return (
       <GoogleMapReact
       bootstrapURLKeys={{ key: "AIzaSyAKFab6999linFjwBC-9Mv_bI2TZ9hae1Y"}}
       yesIWantToUseGoogleMapApiInternals
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent 
          lat={32.985764}   
          lng={-96.750099} 
          text={'Good'}
          color={'Green'}
        />
      </GoogleMapReact>
    );
  }
}


ReactDOM.render(
  <div style={{width: '600px', height: '600px'}}>
    <SimpleMap/>
  </div>,
  document.getElementById('home')
);






const App = () => 
{
    return <h1>This is my app!</h1>;
    <div>
      <Navbar />
    </div>;
}

ReactDOM.render(<App />, document.getElementById('app'));


