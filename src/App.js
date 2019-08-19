import React, { Component } from 'react';
import MapContainer from './MapContainer';
import Quakes from './Quakes'

class App extends Component {
  constructor() {
    super()

    this.state={
      quakes: [],
      coordinates: []
    }
  }

  addLocation =() => {
    // console.log("quakes",this.state.quakes)
    const quakeLocation = []
    for(let i=0; i<this.state.quakes.length; i++){
        const singleCoordinates = { 
        latitude: this.state.quakes[i].geometry.coordinates[0],
        longitude: this.state.quakes[i].geometry.coordinates[1] 
      }
      quakeLocation.push(singleCoordinates)
    }
    this.setState({
      coordinates: quakeLocation
    })
    // console.log('this.state.coordinates: ', this.state.coordinates)
  }

  getQuakes = async () => {
    try{
        const quakes = await fetch ('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson')
        const quakesJson = await quakes.json()
        return quakesJson.features
    }catch(err){
        console.log('get quakes err: ', err)
        return err
    }
  }

  componentDidMount(){
      this.getQuakes()
          .then((data) => {
              this.setState({
                  quakes: data
              })
              this.addLocation()
          })
  }

  render() {
    return (
      <div className="app">
        <div className="mapContainer">
          <MapContainer coordinates={this.state.coordinates}/>
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past week: </h1>
          <Quakes quakes={this.state.quakes} />
        </div>
      </div>
    );
  }
}

export default App;
