import React from 'react';

const TextField = (props) => {
    return(
        <div className="form-group row">
                <label className="col-sm-2 col-form-label">{props.label}</label>
                <div className="col-sm-10">
                    <input type={props.type && "text"}
                        value={props.value}
                        onChange={props.onTextChange}
                        className="form-control"
                        placeholder={props.placeholder}
                        name={props.name}/>
                </div>
            </div>
    )
}

export default TextField;