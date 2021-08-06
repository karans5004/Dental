import React from 'react';

import {formContainer, mb1, mb2} from './PhysicalExamination.module.css'

function PhysicalExamination() {
    return(
        <div className={"row "+formContainer}>
            <div className="col-md-12">
                <p>Physical Examination</p>
            </div>

            <div className="col-md-12" style={{textAlign:'left'}}>

                <div className="col-md-12" style={{textAlign:'left'}}>
                    <p><strong>Physical Examination Record</strong></p>
                </div>
                
                <div className={"form-group "+mb1}>
                    <label htmlFor="" className={mb2}>General and Extra-oral</label>
                    <input type="text" className="form-control"/>
                </div>

                <div className="col-md-12" style={{textAlign:'left'}}>
                    <p><strong>Intra-oral (FDI notation)</strong></p>
                </div>

                <div className={"form-group "+mb1}>
                    <label htmlFor="" className={mb2}> [A] Teeth/ Edentuious Alveolar Process </label>
                    <input type="text" className="form-control"/>
                </div>

                <div className="col-md-12" style={{textAlign:'center',marginBottom:'20px'}}>
                    <p>FDI Two-Digit Notation</p>
                    <div className="col-md-12" style={{textAlign:'center'}}>
                        <span>Permanent Teeth</span>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <span>Upper Right</span>
                        </div>
                        <div className="col-md-6">
                            <span>Upper Left</span>
                        </div>
                        <div className="col-md-6">
                            <div style={{width:'12.5%',backgroundColor:'blue',color:'#fff',display:'inline-block',borderRight:'1px solid #fff'}}>18</div>
                            <div style={{width:'12.5%',backgroundColor:'blue',color:'#fff',display:'inline-block',borderRight:'1px solid #fff'}}>17</div>
                            <div style={{width:'12.5%',backgroundColor:'blue',color:'#fff',display:'inline-block',borderRight:'1px solid #fff'}}>16</div>
                            <div style={{width:'12.5%',backgroundColor:'blue',color:'#fff',display:'inline-block',borderRight:'1px solid #fff'}}>15</div>
                            <div style={{width:'12.5%',backgroundColor:'blue',color:'#fff',display:'inline-block',borderRight:'1px solid #fff'}}>14</div>
                            <div style={{width:'12.5%',backgroundColor:'blue',color:'#fff',display:'inline-block',borderRight:'1px solid #fff'}}>13</div>
                            <div style={{width:'12.5%',backgroundColor:'blue',color:'#fff',display:'inline-block',borderRight:'1px solid #fff'}}>12</div>
                            <div style={{width:'12.5%',backgroundColor:'blue',color:'#fff',display:'inline-block',borderRight:'1px solid #fff'}}>11</div>


                            <div style={{width:'12.5%',backgroundColor:'green',color:'#fff',display:'inline-block',borderRight:'1px solid #fff'}}>48</div>
                            <div style={{width:'12.5%',backgroundColor:'green',color:'#fff',display:'inline-block',borderRight:'1px solid #fff'}}>47</div>
                            <div style={{width:'12.5%',backgroundColor:'green',color:'#fff',display:'inline-block',borderRight:'1px solid #fff'}}>46</div>
                            <div style={{width:'12.5%',backgroundColor:'green',color:'#fff',display:'inline-block',borderRight:'1px solid #fff'}}>45</div>
                            <div style={{width:'12.5%',backgroundColor:'green',color:'#fff',display:'inline-block',borderRight:'1px solid #fff'}}>44</div>
                            <div style={{width:'12.5%',backgroundColor:'green',color:'#fff',display:'inline-block',borderRight:'1px solid #fff'}}>43</div>
                            <div style={{width:'12.5%',backgroundColor:'green',color:'#fff',display:'inline-block',borderRight:'1px solid #fff'}}>42</div>
                            <div style={{width:'12.5%',backgroundColor:'green',color:'#fff',display:'inline-block',borderRight:'1px solid #fff'}}>41</div>
                        </div>
                        <div className="col-md-6">
                            <div style={{width:'12.5%',backgroundColor:'pink',color:'#000',display:'inline-block',borderRight:'1px solid #fff'}}>21</div>
                            <div style={{width:'12.5%',backgroundColor:'pink',color:'#000',display:'inline-block',borderRight:'1px solid #fff'}}>22</div>
                            <div style={{width:'12.5%',backgroundColor:'pink',color:'#000',display:'inline-block',borderRight:'1px solid #fff'}}>23</div>
                            <div style={{width:'12.5%',backgroundColor:'pink',color:'#000',display:'inline-block',borderRight:'1px solid #fff'}}>24</div>
                            <div style={{width:'12.5%',backgroundColor:'pink',color:'#000',display:'inline-block',borderRight:'1px solid #fff'}}>25</div>
                            <div style={{width:'12.5%',backgroundColor:'pink',color:'#000',display:'inline-block',borderRight:'1px solid #fff'}}>26</div>
                            <div style={{width:'12.5%',backgroundColor:'pink',color:'#000',display:'inline-block',borderRight:'1px solid #fff'}}>27</div>
                            <div style={{width:'12.5%',backgroundColor:'pink',color:'#000',display:'inline-block',borderRight:'1px solid #fff'}}>28</div>


                            <div style={{width:'12.5%',backgroundColor:'orange',color:'#000',display:'inline-block',borderRight:'1px solid #fff'}}>31</div>
                            <div style={{width:'12.5%',backgroundColor:'orange',color:'#000',display:'inline-block',borderRight:'1px solid #fff'}}>32</div>
                            <div style={{width:'12.5%',backgroundColor:'orange',color:'#000',display:'inline-block',borderRight:'1px solid #fff'}}>33</div>
                            <div style={{width:'12.5%',backgroundColor:'orange',color:'#000',display:'inline-block',borderRight:'1px solid #fff'}}>34</div>
                            <div style={{width:'12.5%',backgroundColor:'orange',color:'#000',display:'inline-block',borderRight:'1px solid #fff'}}>35</div>
                            <div style={{width:'12.5%',backgroundColor:'orange',color:'#000',display:'inline-block',borderRight:'1px solid #fff'}}>36</div>
                            <div style={{width:'12.5%',backgroundColor:'orange',color:'#000',display:'inline-block',borderRight:'1px solid #fff'}}>37</div>
                            <div style={{width:'12.5%',backgroundColor:'orange',color:'#000',display:'inline-block',borderRight:'1px solid #fff'}}>38</div>
                        </div>
                        <div className="col-md-6">
                            <span>Lower Right</span>
                        </div>
                        <div className="col-md-6">
                            <span>Lower Left</span>
                        </div>
                    </div>

                    <div className="col-md-12" style={{textAlign:'center',marginTop:'10px'}}>
                        <span>Deciduous Teeth</span>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <span>Upper Right</span>
                        </div>
                        <div className="col-md-6">
                            <span>Upper Left</span>
                        </div>
                        <div className="col-md-6">
                            <div style={{width:'25%',backgroundColor:'blue',color:'#fff',display:'inline-block',borderRight:'1px solid #fff'}}>51</div>
                            <div style={{width:'25%',backgroundColor:'blue',color:'#fff',display:'inline-block',borderRight:'1px solid #fff'}}>52</div>
                            <div style={{width:'25%',backgroundColor:'blue',color:'#fff',display:'inline-block',borderRight:'1px solid #fff'}}>53</div>
                            <div style={{width:'25%',backgroundColor:'blue',color:'#fff',display:'inline-block',borderRight:'1px solid #fff'}}>54</div>
                          
                            <div style={{width:'25%',backgroundColor:'green',color:'#fff',display:'inline-block',borderRight:'1px solid #fff'}}>81</div>
                            <div style={{width:'25%',backgroundColor:'green',color:'#fff',display:'inline-block',borderRight:'1px solid #fff'}}>82</div>
                            <div style={{width:'25%',backgroundColor:'green',color:'#fff',display:'inline-block',borderRight:'1px solid #fff'}}>83</div>
                            <div style={{width:'25%',backgroundColor:'green',color:'#fff',display:'inline-block',borderRight:'1px solid #fff'}}>84</div>
                        </div>
                        <div className="col-md-6">
                            <div style={{width:'25%',backgroundColor:'pink',color:'#000',display:'inline-block',borderRight:'1px solid #fff'}}>51</div>
                            <div style={{width:'25%',backgroundColor:'pink',color:'#000',display:'inline-block',borderRight:'1px solid #fff'}}>52</div>
                            <div style={{width:'25%',backgroundColor:'pink',color:'#000',display:'inline-block',borderRight:'1px solid #fff'}}>53</div>
                            <div style={{width:'25%',backgroundColor:'pink',color:'#000',display:'inline-block',borderRight:'1px solid #fff'}}>54</div>
                          
                            <div style={{width:'25%',backgroundColor:'orange',color:'#000',display:'inline-block',borderRight:'1px solid #fff'}}>71</div>
                            <div style={{width:'25%',backgroundColor:'orange',color:'#000',display:'inline-block',borderRight:'1px solid #fff'}}>72</div>
                            <div style={{width:'25%',backgroundColor:'orange',color:'#000',display:'inline-block',borderRight:'1px solid #fff'}}>73</div>
                            <div style={{width:'25%',backgroundColor:'orange',color:'#000',display:'inline-block',borderRight:'1px solid #fff'}}>74</div>
                        </div>
                        <div className="col-md-6">
                            <span>Lower Right</span>
                        </div>
                        <div className="col-md-6">
                            <span>Lower Left</span>
                        </div>
                    </div>
                </div>

                <div className={"form-group "+mb1}>
                    <label htmlFor="" className={mb2}> [B] Periodontium </label>
                    <input type="text" className="form-control"/>
                </div>

                <div className={"form-group "+mb1}>
                    <label htmlFor="" className={mb2}> [C] Oral Mucuos Membrane</label>
                    <input type="text" className="form-control"/>
                </div>

                <div className={"form-group "+mb1}>
                    <label htmlFor="" className={mb2}> [D] TMJ</label>
                    <input type="text" className="form-control"/>
                </div>

                <hr/>
                
                <div className="col-md-12" style={{textAlign:'left'}}>
                    <p><strong>Diagnosis Referral Information</strong></p>
                </div>

                <div className={"form-group "+mb1}>
                    <label htmlFor="" className={mb2}> Diagnosis and Referral</label>
                    <input type="text" className="form-control"/>
                </div>

                <div className="col-md-12">
                    <table className="table table-bordered table-hover" style={{width:'100%', textAlign:'center'}}>
                        <thead>
                            <td style={{padding:'10px',fontSize:'16px',fontWeight:'600'}}>Department Name</td>
                            <td style={{padding:'10px',fontSize:'16px',fontWeight:'600'}}>Referral Sequence</td>
                        </thead>
                        <tbody>
                            <tr>
                                <td> Community Dentistry </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> Conservative Dentistry </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> Implantology </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> OMDR </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> OPD </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> Oral & Maxillofacial Surgery </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> Oral Pathology </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> Orthodontics </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> Pedodontics </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> Periodontics </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> Prosthodontics </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> Radiology </td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <hr/>

                <div className="row">
                    <div className="col-md-6">
                        <div className={"form-group "+mb1}>
                            <select name="" id="" className="form-select">
                                <option>Examined By</option>    
                                <option value="">Head1</option>    
                                <option value="">Head2</option>    
                                <option value="">Head2</option>    
                            </select>                
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className={"form-group "+mb1}>
                            <select name="" id="" className="form-select">
                                <option>Under Guidance of</option>    
                                <option value="">Head1</option>    
                                <option value="">Head2</option>    
                                <option value="">Head2</option>    
                            </select>                
                        </div>
                    </div>
                </div>


                <div className={"col-md-12 "+ mb1} style={{textAlign:'center'}}>
                    <button className="btn btn-primary">
                        Submit
                    </button>
                </div>

                
            </div>
        </div>
    )
}

export default PhysicalExamination;