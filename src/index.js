import { createRoot } from 'react-dom/client';
import React from 'react';
import GoogleMapReact from 'google-map-react';
import { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import NavigationBar from './components/Navbar/Navbar.js';

var firebaseConfig = {
  apiKey: 'AIzaSyBgxs2tW6Lb0GaJtfSCdeQyVd--WrzSBRs',
  authDomain: 'hacka-e917c.firebaseapp.com',
  projectId: 'hacka-e917c',
  storageBucket: 'hacka-e917c.appspot.com',
  messagingSenderId: '327466742979',
  appId: '1:327466742979:web:86fdde1df3fbae676f5e76',
};
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

const AnyReactComponent = ({ text, color }) => (
  <div
    style={{
      color: 'black',
      background: color,
      padding: '40px 40px',
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100%',
      opacity: '60%',
      transform: 'translate(-50%, -50%)',
    }}
  >
    {text}
  </div>
);

class SimpleMap extends React.Component {
  static defaultProps = {
    center: { lat: 32.99, lng: -96.75 },
    zoom: 11,
  };

  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAKFab6999linFjwBC-9Mv_bI2TZ9hae1Y' }}
        yesIWantToUseGoogleMapApiInternals
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent
          lat={32.726639}
          lng={-96.991417}
          text={'Ok'}
          color={'Yellow'}
        />
        <AnyReactComponent
          lat={33.012192}
          lng={-96.618917}
          text={'High'}
          color={'Red'}
        />
        <AnyReactComponent
          lat={32.763}
          lng={-96.29278}
          text={'Ok'}
          color={'Yellow'}
        />
        <AnyReactComponent
          lat={32.6789}
          lng={-96.938141}
          text={'Good'}
          color={'Green'}
        />
        <AnyReactComponent
          lat={33.3418}
          lng={-97.210645}
          text={'Ok'}
          color={'Yellow'}
        />

        <AnyReactComponent
          lat={33.3418}
          lng={-97.210645}
          text={'Ok'}
          color={'Yellow'}
        />

        {/* Custom additions */}

        {/* 75001 */}
        <AnyReactComponent
          lat={32.9637}
          lng={-96.8401}
          text={'Ok'}
          color={'Yellow'}
        />

        {/* 75009 */}
        <AnyReactComponent
          lat={33.3213}
          lng={-96.7708}
          text={'High'}
          color={'Red'}
        />

        {/* 75014 */}
        <AnyReactComponent
          lat={32.84}
          lng={-96.97}
          text={'Ok'}
          color={'Yellow'}
        />
      </GoogleMapReact>
    );
  }
}

createRoot(document.getElementById('home')).render(
  <div
    style={{
      display: 'flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100%',
      height: '100vh',
    }}
  >
    <SimpleMap />
  </div>
);

createRoot(document.getElementById('bar')).render(
  <div
    style={{
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <NavigationBar />
  </div>
);

const read = async () => {
  const docRef = db.collection('Data2022').doc('Arrays');
  const docSnap = await docRef.get();
  if (docSnap) {
    console.log('Document data:', docSnap.data());
  } else {
    console.log('No such document!');
  }
};
read();

/*const Text = () => 
{
    return <h1>Affordable Housing Forecaster</h1>;
}
createRoot(document.getElementById('text')).render(<div style={{
  display: 'flex',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '100%',
}}><Text /></div>);*/
