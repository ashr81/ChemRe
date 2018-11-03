import React from 'react';
import TableComponent from './tableComponent';
import { widgetData } from './dummyData';
import { statusOptions, defaultTableData } from './config';
import ReportsAPI from '../services/reports.api';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import ReportInputComponent from './inputComponent';
import LoaderComponent from '../utils/loaderComponent';
import deepClone from '../utils/deepClone';
import ErrorComponent from '../utils/errorComponent';

export default class ReportFormComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            report: {
                record_number: '',
                experiment_number: '',
                scientist_name: '',
                technician_name: '',
                summary: EditorState.createEmpty(),
                status: statusOptions[0]
            },
            isLoading: !!props.reportId,
            isError: false,
            widgetsData: [widgetData]
        }
        this.updateWidgetsData = this.updateWidgetsData.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onFetchSuccess = this.onFetchSuccess.bind(this);
        this.onFetchFailure = this.onFetchFailure.bind(this);
    }

    onSubmit = () => {
        this.setState({ isLoading: true })
        const { report } = this.state
        const widgetsData = this.state.widgetsData.map((widget) => {
            return {
                id: widget.id,
                name: widget.name,
                content: { header: widget.header, body: widget.body }
            }
        })
        let { summary } = report;
        report.summary = convertToRaw(summary.getCurrentContent())

        ReportsAPI.create({
            id: this.props.reportId,
            payload: {
                ...{...report, status: report.status.value},
                report_widgets_attributes: widgetsData
            }
        }, (response) => {
            window.location.pathname = "/reports"
        }, (errorResonposeJSON) => {
            this.setState({
                isError: true,
                isLoading: false               
            })
        })
    }

    onFetchSuccess = (response) => {
        const { record_number,
                experiment_number,
                scientist_name,
                technician_name
            } = response;
        const status = statusOptions.find((status) => status.value === response.status)
        const widgetsData = response.report_widgets.map((widget) => {
            return {
                id: widget.id,
                name: widget.name,
                header: widget.content.header,
                body: widget.content.body
            }
        });
        const summary = response.summary ? EditorState.createWithContent(convertFromRaw(response.summary)) : EditorState.createEmpty();
        this.setState({
            report: { record_number, experiment_number, scientist_name, technician_name, status, summary },
            widgetsData,
            isLoading: false
        })
    }

    onFetchFailure = () => {
        this.setState({
            isError: true,
            isLoading: false
        })
    }

    fetchMasterData = () => {
        const { reportId } = this.props;
        if(reportId) {
            ReportsAPI.fetch(
                reportId, 
                this.onFetchSuccess,
                this.onFetchFailure
            )
        }
    }

    componentDidMount() {
        this.fetchMasterData();
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
        const newWidgetsData = [...widgetsData]
        newWidgetsData[index] = newWidgetData;
        this.setState({
            widgetsData: newWidgetsData
        })
    }

    tablesContent = () => {
        const widgetsData = deepClone(this.state.widgetsData);
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

    destroyWidget = (widgetId) => {
        if(this.props.reportId) {
            ReportsAPI.destroyWidget(this.props.reportId, widgetId)
        }
    }

    removeTable = (event) => {
        const widgetPosition = event.currentTarget.closest("table").dataset.tableindex;
        const widgetsData = [...this.state.widgetsData];
        const widgetId = widgetsData[widgetPosition] && widgetsData[widgetPosition].id
        widgetsData.splice(widgetPosition, 1)
        this.setState({
            widgetsData 
        }, () => {
            this.destroyWidget(widgetId);
        });
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
        if(this.state.isLoading) {
            return <LoaderComponent />
        } else if(this.state.isError) {
            return(<ErrorComponent/>)
        } else {
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
                        <button type="button" className="btn btn-primary" onClick={this.onSubmit}>Save</button>
                    </div>
                </div>)
        }
    }
}