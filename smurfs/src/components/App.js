import React, {useEffect} from "react";
import "./App.css";
import {connect} from 'react-redux';
import {getSmurfs, postSmurfs, deleteSmurfsAC} from '../actions';
import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';

const App = ({getSmurfs, postSmurfs, isFetching, isPosting, smurfs, error}) => {
  useEffect(() => {
    getSmurfs();
  }, [getSmurfs]);

  if (isFetching) {
    return <h2>Our colony of worker ants is getting that data for you!</h2>
  }

  
  const addSmurf = props => {
    console.log("App item is", props)
    postSmurfs(props)
  }

  const deleteSmurfs = props => {
    console.log("Deleting", props)
    console.log(deleteSmurfsAC(props));
    deleteSmurfsAC(props)
  }

    return (
      <div className="App">
        <h1>SMURFS Roll-Call!</h1>
        <div><SmurfList smurfs={smurfs} deleteSmurfs={deleteSmurfs} /></div>
        <SmurfForm smurfs={smurfs} addSmurf={addSmurf}/>
      </div>
    );
}

const mapStateToProps = state => {
  return {
    getSmurfs: state.getSmurfs,
    postSmurfs: state.postSmurfs,
    isFetching: state.isFetching,
    smurfs: state.smurfs,
    error: state.error
  }
}

export default connect(
  mapStateToProps,
   { getSmurfs, postSmurfs, deleteSmurfsAC})(App);
