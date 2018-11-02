import React from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';
// TODO:: Implementation of add and remove columns.
const TableComponent = (props) => {
    const onHeaderInputChange = (event, colIndex) => {
        let { widgetData } = props;
        const header = [...widgetData.header];
        header[colIndex] = event.currentTarget.value;
        widgetData.header = [...header];
        props.updateWidgetsData(widgetData, props.widgetPosition)
    }

    const onInputChange = (event, rowIndex, colIndex) => {
        let { widgetData } = props;
        const body = JSON.parse(JSON.stringify(widgetData.body));
        body[rowIndex][colIndex] = event.currentTarget.value;
        widgetData.body = body;
        props.updateWidgetsData(widgetData, props.widgetPosition);
    }

    const addRow = (event, position) => {
        const rowIndex = parseInt(event.currentTarget.parentElement.dataset.rowindex);
        let { widgetData } = props;
        const { body } = widgetData;
        const rowLength = props.widgetData.header.length;
        const rowData = Array(rowLength).join('.').split('.');
        const newWidgetData = {...widgetData}
        if(position === "above") {
            // For zero index rowindex should be same.
            body.splice(rowIndex ? rowIndex-1 : rowIndex, 0 , rowData);
        } else if(position === "below") {
            body.splice(rowIndex+1, 0 , rowData);
        }
        newWidgetData.body = body;
        props.updateWidgetsData(newWidgetData, props.widgetPosition)
    }

    const removeRow = (event) => {
        const rowIndex = parseInt(event.currentTarget.parentElement.dataset.rowindex);
        let { widgetData } = props;
        const { body } = widgetData;
        const newWidgetData = {...widgetData}
        body.splice(rowIndex, 1);
        newWidgetData.body = body;
        props.updateWidgetsData(newWidgetData, props.widgetPosition)
    }

    return(
        <div className="table-div-wrapper">
            <table className="table table-bordered" data-tableindex={props.widgetPosition}>
                <TableHeader
                    header={props.widgetData.header}
                    onHeaderInputChange={onHeaderInputChange}
                    removeTable={props.removeTable}
                />
                <TableBody
                    body={props.widgetData.body}
                    onInputChange={onInputChange}
                    addRow={addRow}
                    removeRow={removeRow}
                />
            </table>
        </div>
    )
}

export default TableComponent;