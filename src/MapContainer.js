import React, {Component} from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
        //   quakes: [{latitude: 47.359423, longitude: -122.021071}, {latitude: 47.359423, longitude: -112.021071}],
            quakesReady: false
        }

    }
    
    displayMarkers = () => {
        const tempQuakes = this.state.quakes.map((store, index) => {
            return <Marker key={index} id={index} position={{
           lat: store.latitude,
           lng: store.longitude
         }}/>
        })
        return tempQuakes;
    }
      

    componentDidMount = () =>
    {
        this.addLocation();
    }

    addLocation = async () => {

        this.setState(
            {
                quakes: this.props.coordinates,
                quakesReady: true
            }
        );
    }

      render() {
          
          console.log("this.state.quakes",this.state.quakes)
          console.log("this.state.quakes",this.state.quakes)
        const mapStyles = {
            width: '40%',
            height: '100%',
        
          };
        return (
            <div>
                {
                    this.state.quakesReady ?
                        <Map
                        google={this.props.google}
                        zoom={1.5}
                        style={mapStyles}
                        initialCenter={{ lat:39.770729 , lng: -104.970505}}
                        >
                        {this.displayMarkers()}
                        </Map>
                    :
                    null
                }
            </div>
        );
      }
    }

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg'
  })(MapContainer);