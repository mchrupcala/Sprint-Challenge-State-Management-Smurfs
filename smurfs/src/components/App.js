import React, {useEffect} from "react";
import "./App.css";
import {connect} from 'react-redux';
import {getSmurfs} from '../actions';
import SmurfList from './SmurfList';

const App = ({getSmurfs, isFetching, smurfs, error}) => {
  useEffect(() => {
    getSmurfs();
  }, [getSmurfs]);

  if (isFetching) {
    return <h2>Our colony of worker ants is getting that data for you!</h2>
  }


    return (
      <div className="App">
        <h1>SMURFS Roll-Call!</h1>
        <div><SmurfList smurfs={smurfs}/></div>
      </div>
    );
}

const mapStateToProps = state => {
  return {
    getSmurfs: state.getSmurfs,
    isFetching: state.isFetching,
    smurfs: state.smurfs,
    error: state.error
  }
}

export default connect(
  mapStateToProps,
   { getSmurfs})(App);
