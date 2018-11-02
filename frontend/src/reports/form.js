import React from 'react';
import TableComponent from './tableComponent';
import { widgetData } from './dummyData';
import { statusOptions, defaultTableData } from './config';
import { EditorState } from 'draft-js';
import ReportInputComponent from './inputComponent';

export default class ReportFormComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            report: {
                recordNumber: '',
                experimentNumber: '',
                scientistName: '',
                technicianName: '',
                summary: EditorState.createEmpty(),
                status: statusOptions[0]
            },
            widgetsData: [widgetData]
        }
        this.updateWidgetsData = this.updateWidgetsData.bind(this);
    }

    onStatusChange = (status) => {
        const { report } = this.state;
        report.status = status;
        this.setState({ report })
    }

    onReportEditorTextChange = (summary) => {
        const { report } = this.state;
        report.summary = summary;
        this.setState({ report });
    }

    onReportTextChange = (event) => {
        const { report } = this.state;
        report[event.currentTarget.name] = event.currentTarget.value;
        this.setState({ report })
    }

    updateWidgetsData = (newWidgetData, index) => {
        const { widgetsData } = this.state;
        const newWidgetsData = [...widgetsData.slice(0, index),
            newWidgetData,
            ...widgetsData.slice(index, -1)]
        this.setState({
            widgetsData: newWidgetsData
        })
    }

    tablesContent = () => {
        const widgetsData = [...this.state.widgetsData];
        return(
            <React.Fragment>
                <div className="table-content">
                    {widgetsData.map((widgetData, index) => {
                        return <TableComponent
                            key={index}
                            widgetData={widgetData} widgetPosition={index}
                            updateWidgetsData={this.updateWidgetsData}
                            removeTable={this.removeTable}
                        />;
                    })}
                </div>
                {this.addNewTableView()}
            </React.Fragment>
        )
    }

    removeTable = (event) => {
        const widgetPosition = event.currentTarget.closest("table").dataset.tableindex;
        const widgetsData = [...this.state.widgetsData];
        widgetsData.splice(widgetPosition, 1)
        this.setState({ widgetsData });
    }

    addTable = () => {
        const widgetsData = [...this.state.widgetsData];
        widgetsData.push(defaultTableData)
        this.setState({ widgetsData });
    }

    addNewTableView = () => {
        return(
            <div className="add-table-icon" onClick={this.addTable}>
                <i className="fa fa-plus-square" aria-hidden="true"></i>
            </div>
        )
    }

    render() {
        return(<div className="container">
                <h4 className="page-heading">Experiment Valuation Sheet</h4>
                <ReportInputComponent 
                    {...this.state.report}
                    onReportTextChange={this.onReportTextChange}
                    onStatusChange={this.onStatusChange}
                    onReportEditorTextChange={this.onReportEditorTextChange}/>
                {this.tablesContent()}
                <div className="form-submission">
                    <button type="button" className="btn btn-info m-r-20">Create Template</button>
                    <button type="button" className="btn btn-primary">Save</button>
                </div>
            </div>)
    }
}