import { createRoot } from 'react-dom/client';
import React from 'react'
import GoogleMapReact from 'google-map-react';
import {useState} from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


var firebaseConfig = {
  apiKey: "AIzaSyBgxs2tW6Lb0GaJtfSCdeQyVd--WrzSBRs",
  authDomain: "hacka-e917c.firebaseapp.com",
  projectId: "hacka-e917c",
  storageBucket: "hacka-e917c.appspot.com",
  messagingSenderId: "327466742979",
  appId: "1:327466742979:web:86fdde1df3fbae676f5e76"
};
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

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

createRoot(document.getElementById('home')).render(<div style={{width: '600px', height: '600px'}}>
<SimpleMap/>
</div>);


const read = async() => {
  const docRef = db.collection("Data2022").doc("Arrays");
  const docSnap = await docRef.get();
  if (docSnap) {
    console.log("Document data:", docSnap.data());
  } else {
    console.log("No such document!");
  }
}
read();



const Text = () => 
{
    return <h1>Affordable Housing Forecaster</h1>;
}
createRoot(document.getElementById('text')).render(<Text />);


