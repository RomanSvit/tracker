import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import {
  addTracker,
  stopTracker,
  deleteTracker,
  getTrackersList,
  // timerRun,
} from "../../redux/actions";
import ListTrackers from "../listTrackers/ListTrackers";
import { goTracker } from "../../redux/actionOperations";

const shortid = require("shortid");
const moment = require("moment");

class App extends Component {
  state = {
    nameTrack: "",
    hour: 0,
    minute: 0,
    second: 0,
  };

  componentDidMount = () => {
    const localTrackers = JSON.parse(localStorage.getItem("trackers"));
    this.props.getLocalTrackers(localTrackers);
  };
  componentDidUpdate = (prevProps) => {
    if (prevProps.state !== this.props.state) {
      localStorage.setItem("trackers", JSON.stringify(this.props.state));
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };
  reset = () => {
    this.setState({
      nameTrack: "",
    });
  };

  handleSubmit = (e) => {
    const { hour, minute, second, nameTrack } = this.state;
    e.preventDefault();
    const newItem = {
      name:
        nameTrack === ""
          ? ` ${moment().format("MM-DD-YYYY hh:mm:ss")}`
          : nameTrack,
      start: "true",
      id: shortid(),
      hour: hour,
      minute: minute,
      second: second,
    };
    this.props.addNewTracker(newItem);
    this.props.runnigInterval(newItem);
    
    this.reset();
  };

  render() {
    return (
      <>
        <div className="block-tracker">
          <h1 className="title-tracker">Tracker</h1>
          <form onSubmit={this.handleSubmit} className="form-tracker">
            <input
              placeholder="Enter tracker name"
              type="text"
              name="nameTrack"
              value={this.state.nameTrack}
              onChange={this.handleChange}
            />
            <button type="submit" className="btn-add"></button>
          </form>
          {this.props.state.length ? (
            <ListTrackers
              state={this.state}
              props={this.props.state}
              handlerClickTogle={this.props.handlerPlayStop}
              handlerClickDelete={this.props.removeTracker}
            />
          ) : null}
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addNewTracker: (item) => dispatch(addTracker(item)),
    handlerPlayStop: (e) => dispatch(stopTracker(e)),
    removeTracker: (e) => dispatch(deleteTracker(e)),
    getLocalTrackers: (trackers) => dispatch(getTrackersList(trackers)),
    runnigInterval: (item) => dispatch(goTracker(item)),
    // runnigInterval: (item) => dispatch(timerRun(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
