import React from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';

const TableComponent = (props) => {

    const ignoreTags = ["INPUT"];

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

    const addRow = (event) => {
        if(ignoreTags.includes(event.target.tagName)) return;
        const rowIndex = parseInt(event.currentTarget.dataset.rowindex);
        const prevIndex = rowIndex - 1;
        const nextIndex = rowIndex + 1;
        let { widgetData } = props;
        const { body } = widgetData;
        const rowLength = props.widgetData.header.length;
        const rowData = Array(rowLength).join('.').split('.');
        const newWidgetData = {...widgetData}
        if(prevIndex === -1)
            body.splice(0, 0, rowData)
        else {
            body.splice(nextIndex, 0, rowData)
        }
        newWidgetData.body = body;
        props.updateWidgetsData(newWidgetData, props.widgetPosition)
    }

    const addColumn = (prevIndex, presentIndex) => {
        
    }

    const removeRow = (prevIndex, presentIndex) => {
        
    }

    const removeColumn = (prevIndex, presentIndex) => {
        
    }

    return(
        <table className="table table-bordered">
            <TableHeader
                header={props.widgetData.header}
                onHeaderInputChange={onHeaderInputChange}
                addColumn={addColumn}
            />
            <TableBody
                body={props.widgetData.body}
                onInputChange={onInputChange}
                addColumn={addColumn}
                addRow={addRow}
                removeColumn={removeColumn}
                removeRow={removeRow}
            />
        </table>
    )
}

export default TableComponent;