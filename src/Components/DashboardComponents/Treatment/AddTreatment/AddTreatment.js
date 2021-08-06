import React from 'react';

import {formContainer, mb1, mb2} from './AddTreatment.module.css'

function AddTreatment() {
    return(
        <div className={"row "+formContainer}>
            <div className="col-md-12">
                <p>Add Treatment</p>
            </div>

            <div className="col-md-12" style={{textAlign:'left'}}>
                <div className={"form-group "+mb1}>
                    <label htmlFor="" className={mb2}> Treatment Name</label>
                    <input type="text" className="form-control"/>
                </div>

                <div className={"form-group "+mb1}>
                    <label htmlFor="" className={mb2}> Department Name</label>
                    <select name="" id="" className="form-select">
                        <option>Select Department</option>    
                        <option value="">Department 1</option>    
                        <option value="">Department 2</option>    
                    </select>                
                </div>

                <div className={"form-group "+mb1}>
                    <label htmlFor="" className={mb2}> Treatment Cost</label>
                    <input type="number" className="form-control"/>
                </div>

                <div className={"form-group "+mb1}>
                    <label htmlFor="" className={mb2}> Number of Sessions</label>
                    <input type="number" className="form-control"/>
                </div>

                <button className="btn btn-primary">
                    Submit
                </button>
            </div>
        </div>
    )
}

export default AddTreatment;