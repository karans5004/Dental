import React from 'react';

import {formContainer, mb1, mb2} from './AddDepartment.module.css'

function AddDepartmentForm() {
    return(
        <div className={"row "+formContainer}>
            <div className="col-md-12">
                <p>Add Department</p>
            </div>

            <div className="col-md-12" style={{textAlign:'left'}}>
                <div className={"form-group "+mb1}>
                    <label htmlFor="" className={mb2}> Department Name</label>
                    <input type="text" className="form-control"/>
                </div>

                <div className={"form-group "+mb1}>
                    <label htmlFor="" className={mb2}> Department Head</label>
                    <select name="" id="" className="form-select">
                        <option>Select department head</option>    
                        <option value="">Head1</option>    
                        <option value="">Head2</option>    
                    </select>                
                </div>

                <button className="btn btn-primary">
                    Submit
                </button>
            </div>
        </div>
    )
}

export default AddDepartmentForm;