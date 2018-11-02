import React from 'react';
import TextField from '../utils/textField';
import Select from 'react-select';
import { statusOptions } from './config';
import { Editor } from 'draft-js';

const ReportInputComponent = (props) => {
    console.log(props.summary)
    return(
        <React.Fragment>
            <TextField
                type="number"
                label="Experiment Number"
                value={props.experimentNumber}
                onTextChange={props.onReportTextChange}
                placeholder="Experiment Number"
                name="experimentNumber"
            />
            <TextField
                label="Scientist Name"
                value={props.scientistName}
                onTextChange={props.onReportTextChange}
                placeholder="Scientist Name"
                name="scientistName"
            />
            <TextField
                label="Technician Name"
                value={props.technicianName}
                onTextChange={props.onReportTextChange}
                placeholder="Technician Name"
                name="technicianName"
            />
            <div>
                <div>Summary of your Test Results</div>
                <Editor
                    editorState={props.summary}
                    onChange={props.onReportEditorTextChange} />
            </div>
            <div className="react-select-component">
                <div className="display-inline">Status of Experiment</div>
                <Select
                    name="Status"
                    value={props.status}
                    onChange={props.onStatusChange}
                    options={statusOptions}
                />
            </div>
        </React.Fragment>
    )    
}

export default ReportInputComponent;