import React from "react";
import "./App.css";
import {connect} from 'react-redux';
import {getSmurfs} from '../actions';

const App = ({getSmurfs}) => {
  useEffect(() => {
    getSmurfs();
  }, [getSmurfs]);

  if (isFetching) {
    return <h2>Our colony of worker ants is getting that data for you!</h2>
  }


    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    );
}

const mapStateToProps = state => {
  return {

  }
}

export default connect(mapStateToProps, {})(App);
