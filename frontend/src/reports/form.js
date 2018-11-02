import React from 'react';
import TableComponent from './tableComponent';
import { widgetData } from './dummyData';

export default class ReportFormComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            widgetsData: [widgetData]
        }
        this.updateWidgetsData = this.updateWidgetsData.bind(this);
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

    render() {
        const { widgetsData } = this.state;
        return(
            <React.Fragment>
            {widgetsData.map((widgetData, index) => {
                return <TableComponent
                    key={index}
                    widgetData={widgetData} widgetPosition={index}
                    updateWidgetsData={this.updateWidgetsData}
                />;
            })}
            </React.Fragment>)
    }
}