import React from 'react';
import PropTypes from 'prop-types';

const TableControls = (props) => {
    const { addRowAbove, addRowBelow, removeRow, rowIndex } = props;
    return(
    <div className="form-controls" data-rowindex={rowIndex}>
        <div className={addRowAbove ? "" : "display-none"} onClick={addRowAbove} data-tip="click to add row above"><i className="fa fa-arrow-up"/></div>
        <div className={addRowBelow ? "" : "display-none"} onClick={addRowBelow} data-tip="click to add row below"><i className="fa fa-arrow-down"/></div>
        <div className={removeRow ? "" : "display-none"} onClick={removeRow} data-tip="click to remove this row"><i className="fa fa-trash"/></div>
    </div>)
}

TableControls.propTypes = {
    addRowAbove: PropTypes.func,
    addRowBelow: PropTypes.func,
    removeRow: PropTypes.func
}

export default TableControls;