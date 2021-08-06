import React from 'react';

import {formContainer, mb1, mb2} from './SearchDepartment.module.css'

function SearchDepartment() {
    return(
        <div className={"row "+formContainer}>
            <div className="col-md-12">
                <p>Search Department</p>
            </div>

            <div className="col-md-12" style={{textAlign:'left'}}>
                
                <div className={"form-group "+mb1}>
                    <label htmlFor="" className={mb2}> Department Name</label>
                    <input type="text" className="form-control"/>
                </div>

                <div className={"form-group "+mb1}>
                    <label htmlFor="" className={mb2}> Department Id</label>
                    <input type="text" className="form-control"/>
                </div>

                <button className="btn btn-primary">
                    Submit
                </button>
            </div>
        </div>
    )
}

export default SearchDepartment;