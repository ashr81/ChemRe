import React from 'react';
import TextField from '../utils/textField';
import Select from 'react-select';
import { statusOptions } from './config';
import { Editor } from 'draft-js';

const ReportInputComponent = (props) => {
    return(
        <React.Fragment>
            <TextField
                type="number"
                label="Experiment Number"
                value={props.experiment_number}
                onTextChange={props.onReportTextChange}
                placeholder="Experiment Number"
                name="experiment_number"
            />
            <TextField
                label="Scientist Name"
                value={props.scientist_name}
                onTextChange={props.onReportTextChange}
                placeholder="Scientist Name"
                name="scientist_name"
            />
            <TextField
                label="Technician Name"
                value={props.technician_name}
                onTextChange={props.onReportTextChange}
                placeholder="Technician Name"
                name="technician_name"
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