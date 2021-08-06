import React from 'react';

import {formContainer, mb1, mb2} from './AddEmployee.module.css'

function AddEmployee() {
    return(
        <div className={"row "+formContainer}>
            <div className="col-md-12">
                <p>Add Employee</p>
            </div>

            <div className="col-md-12" style={{textAlign:'left'}}>
                <div className={"form-group "+mb1}>
                    <label htmlFor="" className={mb2}> Employee Name</label>
                    <input type="text" className="form-control"/>
                </div>

                <div className={"form-group "+mb1}>
                    <label htmlFor="" className={mb2}> Employee Age</label>
                    <input type="number" className="form-control"/>
                </div>

                <div className={"form-group "+mb1}>
                    <label htmlFor="" className={mb2}> Gender</label>
                    <select name="" id="" className="form-select">
                        <option>Select Gender</option>    
                        <option value="">Male</option>    
                        <option value="">Female</option>    
                    </select>                
                </div>

                <div className={"form-group "+mb1}>
                    <label htmlFor="" className={mb2}> Qualification</label>
                    <input type="text" className="form-control"/>
                </div>

                <div className={"form-group "+mb1}>
                    <label htmlFor="" className={mb2}> Experience</label>
                    <input type="text" className="form-control"/>
                </div>

                <div className={"form-group "+mb1}>
                    <label htmlFor="" className={mb2}> Department</label>
                    <input type="text" className="form-control"/>
                </div>

                <div className={"form-group "+mb1}>
                    <label htmlFor="" className={mb2}> Phone</label>
                    <input type="text" className="form-control"/>
                </div>

                <div className={"form-group "+mb1}>
                    <label htmlFor="" className={mb2}> Email</label>
                    <input type="text" className="form-control"/>
                </div>

                <button className="btn btn-primary">
                    Submit
                </button>
            </div>
        </div>
    )
}

export default AddEmployee;