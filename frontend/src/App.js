import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css"
import 'font-awesome/css/font-awesome.min.css';
import ReactTooltip from 'react-tooltip'
import ReportFormComponent from './reports/form';

class App extends Component {
  render() {
    return (
      <Fragment>
        <ReportFormComponent />
        <ReactTooltip />
      </Fragment>
    );
  }
}

export default App;
