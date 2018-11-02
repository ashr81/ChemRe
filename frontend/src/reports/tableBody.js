import React from 'react';

const TableBody = (props) => {
    // Should have input inside td, th to avoid uncontrolled-inputs.

    const onMouseEnter = (event) => {
        const { currentTarget } = event;
        currentTarget.addEventListener("click", props.addRow);
        currentTarget.className = 'border-line-style';
        currentTarget.title = 'Click here to add row in between.'
    }

    const onMouseLeave = (event) => {
        const { currentTarget } = event;
        currentTarget.removeEventListener("click", props.addRow)
        currentTarget.className = '';
        currentTarget.title = '';
    }

    return (
        <tbody>
            {props.body.map((columnData, rowIndex) => {
                return (
                <tr key={rowIndex}
                    data-rowindex={rowIndex}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    >{columnData.map((cData, columnIndex) => {
                    if(columnIndex) {
                        return (<td key={columnIndex}>
                                    <input onChange={(event) => props.onInputChange(event, rowIndex, columnIndex)} value={cData}/>
                                </td>)
                    } else {
                        // First column should have bold styles. 
                        return (<th scope="row" key={columnIndex}>
                                <input onChange={(event) => props.onInputChange(event, rowIndex, columnIndex)} value={cData}/>
                            </th>)
                    }
                })}</tr>);
            })}
        </tbody>
    )
}

export default TableBody;