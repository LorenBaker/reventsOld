import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import { incrementAsync, decrementAsync } from "./testActions";
import Script from "react-load-script";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { openModal } from "../modals/modalActions";

const mapState = state => ({
  data: state.test.data,
  loading: state.test.loading
});

const actions = {
  incrementAsync,
  decrementAsync,
  openModal
};

class TestComponent extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  state = {
    address: "",
    scriptLoaded: false
  };

  handleScriptLoad = () => {
    this.setState({ scriptLoaded: true });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log("Success", latLng))
      .catch(error => console.error("Error", error));
  };

  onChange = address => this.setState({ address });

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange
    };

    const { incrementAsync, decrementAsync, data, openModal, loading } = this.props;
    return (
      <div>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyDZeXpDZTQCrgHXqboPDMboUjUOiOR2FGI&libraries=places"
          onLoad={this.handleScriptLoad}
        />
        <h1>Text Area</h1>
        <h3>The answer is: {data}</h3>
        <Button loading={loading} onClick={incrementAsync} color="green" content="Increment" />
        <Button loading={loading} onClick={decrementAsync} color="red" content="Decrement" />
        <Button
          onClick={() => openModal("TestModal", { data: 43 })}
          color="teal"
          content="Open Modal"
        />
        <br /> <br />
        <form onSubmit={this.handleFormSubmit}>
          {this.state.scriptLoaded && (
            <PlacesAutocomplete inputProps={inputProps} />
          )}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default connect(
  mapState,
  actions
)(TestComponent);
