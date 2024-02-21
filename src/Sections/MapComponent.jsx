import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { Component } from "react";

class MapComponent extends Component {
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "70vh", width: "100%" }} className="bg-green-700">
        <Map google={this.props.google} zoom={14}>
          <Marker onClick={this.onMarkerClick} name={"Current location"} />

          <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBFFjwIl-zIy00bHeOvkfMQPkJsSDX9WhU",
})(MapComponent);
