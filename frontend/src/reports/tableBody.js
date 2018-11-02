import React from 'react';
import TableControls from '../utils/tableControls';
const TableBody = (props) => {
    // Should have input inside td, th to avoid uncontrolled-inputs.

    return (
        <tbody>
            {props.body.length ? props.body.map((columnData, rowIndex) => {
                return (
                <tr key={rowIndex}
                    data-rowindex={rowIndex}>
                    {columnData.map((cData, columnIndex) => {
                        if(columnIndex) {
                            return (<td key={columnIndex}>
                                        <input onChange={(event) => props.onInputChange(event, rowIndex, columnIndex)} value={cData}/>
                                    </td>)
                        } else {
                            // First column should have bold styles. 
                            return (
                                <th scope="row" key={columnIndex}>
                                    <input onChange={(event) => props.onInputChange(event, rowIndex, columnIndex)} value={cData}/>
                                </th>)
                    }
                    })}
                    <td key={columnData.length}>
                        {<TableControls
                            rowIndex={rowIndex}
                            removeRow={props.removeRow}
                            addRowAbove={(e) => props.addRow(e, "above")}
                            addRowBelow={(e) => props.addRow(e, "below")}/>}
                    </td>
            </tr>);
            }) :
                <tr><td><TableControls
                    addRowBelow={(e) => props.addRow(e, "below")}/>
                    </td></tr>
            }
        </tbody>
    )
}

export default TableBody;