import React from 'react';
import LoaderComponent from '../utils/loaderComponent';
import ErrorComponent from '../utils/errorComponent';
import ReportsAPI from '../services/reports.api'

class ReportComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            reports: [],
            isError: false,
            isLoading: true
        }
    }

    componentDidMount() {
        ReportsAPI.fetch(null, (response) => {
            this.setState({
                reports: response,
                isLoading: false
            })
        }, () => {
            this.setState({
                isError: true
            })
        })
        
    }

    render() {
        if(this.state.isLoading) {
            return(<LoaderComponent />)
        } else if(this.state.isError) {
            return(<ErrorComponent />)
        } else {
            const { reports } = this.state;
            return(
            <div className="list-view">
                <div>Reports List View</div>
                <div className="list-group">
                {reports.map((report) => {
                    return(   
                        <a key={report.id} 
                            className="list-group-item list-group-item-action"
                            href={`reports/${report.id}/edit`}>{report.experiment_number}</a>
                        )
                })}
                <a className="btn btn-primary" href="reports/new" role="button">New Report</a>
                </div>
            </div>)
        }
    }
}

export default ReportComponent;