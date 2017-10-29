import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    // reference to HTML node or element where the map should get rendered this is a good way to integrate third party libraries in React
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }
  
  render () {
    // this.refs.map - gives a direct reference to this html element
    return <div ref="map" />
  }
}

export default GoogleMap;
