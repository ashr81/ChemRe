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
        </tr>
    </thead>)
}

export default TableHeader;