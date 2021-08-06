import React from 'react';

import {formContainer, mb1, mb2} from './ProposedTreatment.module.css'

function ProposedTreatment() {
    return(
        <div className={"row "+formContainer}>
            <div className="col-md-12">
                <p>Proposed Treatment</p>
            </div>

            <div className="col-md-12" style={{textAlign:'left'}}>
                
                <div className={"form-group "+mb1}>
                    <label htmlFor="" className={mb2}> Registration No.</label>
                    <input type="text" className="form-control"/>
                </div>

                <div className={"form-group "+mb1}>
                    <label htmlFor="" className={mb2}> Patient Name </label>
                    <input type="text" className="form-control"/>
                </div>

                <div className={"form-group "+mb1}>
                    <label htmlFor="" className={mb2}> Cheif Complaint Id</label>
                    <input type="text" className="form-control"/>
                </div>

                <div className={"form-group "+mb1}>
                    <label htmlFor="" className={mb2}> Treatments Proposed</label>
                    <input type="text" className="form-control"/>
                </div>
                
                <div className={"col-md-12 "+ mb1} style={{textAlign:'center'}}>
                    <button className="btn btn-primary">
                        Check Previous Appointments
                    </button>
                </div>

                <div className="row">
                    <div className="col-md-6">

                        <div className={"form-group "+mb1}>
                            <label htmlFor="" className={mb2}> Appointment Date</label>
                            <input type="date" className="form-control"/>
                        </div>

                    </div>
                    <div className="col-md-6">
                        <div className={"form-group "+mb1}>
                            <label htmlFor="" className={mb2}> Appointment Time</label>
                            <input type="time" className="form-control"/>
                        </div>
                    </div>
                </div>

                <div className={"form-group "+mb1}>
                    <label htmlFor="" className={mb2}> Appointment Reason</label>
                    <input type="text" className="form-control"/>
                </div>

                <button className="btn btn-primary">
                    Give Appointment
                </button>

                
            </div>
        </div>
    )
}

export default ProposedTreatment;