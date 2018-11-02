import React from 'react';

const TableHeader = (props) => {
    return(
    <thead>
        <tr>
            {props.header.map((column, index) => {
                return (
                    <th scope="col" key={index}>
                        <input 
                            onChange={(event) => props.onHeaderInputChange(event, index)}
                            value={column}
                        />
                    </th>
                )
            })}
            <th scope="col" data-tip="Click here to remove this table" key={props.header.length}>
                <div className="remove-table" onClick={props.removeTable}>
                    <i className="fa fa-trash"/>
                </div>
            </th>
        </tr>
    </thead>)
}

export default TableHeader;