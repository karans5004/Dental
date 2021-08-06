import React from 'react';

import {formContainer, mb1, mb2} from './AddTreatment.module.css'

function AddTreatment() {
    return(
        <div className={"row "+formContainer}>
            <div className="col-md-12">
                <p>Add Equipment</p>
            </div>

            <div className="col-md-12" style={{textAlign:'left'}}>
                <div className={"form-group "+mb1}>
                    <label htmlFor="" className={mb2}> Equipment Name</label>
                    <input type="text" className="form-control"/>
                </div>

                <button className="btn btn-primary">
                    Submit
                </button>
            </div>
        </div>
    )
}

export default AddTreatment;