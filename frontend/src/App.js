import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css"
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReportFormComponent from './reports/form';
import ReportComponent from './reports';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route exact path="/reports/new"
            component={ReportFormComponent}
          />
          <Route exact path="/reports/:id/edit"
            render={(props) => {
              return <ReportFormComponent reportId={props.match.params.id}/>;
            }}
          />
          <Route exact path="/reports"
            component={ReportComponent}
          />
        </Fragment>
      </Router>
    );
  }
}

export default App;
