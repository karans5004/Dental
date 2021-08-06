import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';
import {Link} from 'react-router-dom';

const showDiv = (id) => {
  if(document.getElementById(id).style.display === 'block'){
    document.getElementById(id).style.display = 'none'
  }
  else{
    document.getElementById(id).style.display = 'block'
  }
}



export const mainListItems = (
  
    <>
    {
      localStorage.getItem('dental_userType') === 'admin' ?

      <>

      <div>
        <ListItem button onClick={() => showDiv('EmployeeDD')}>
          <ListItemIcon>
            <DashboardIcon/>
          </ListItemIcon>
          <ListItemText primary="Employee" />
        </ListItem>
        <ListItem id="EmployeeDD" style={{backgroundColor:'#fff',display:'none'}}>
            <Link to="/Dashboard/AddEmployee" className="no-style-link">
              <ListItem button onClick={() => console.log('add new emp clicked')}>
                <ListItemIcon>
                  <DashboardIcon/>
                </ListItemIcon>
                <ListItemText primary="Add new" />
              </ListItem>
            </Link>

            <Link to="/Dashboard/SearchEmployee" className="no-style-link">
              <ListItem button onClick={() => console.log('Search emp clicked')}>
                <ListItemIcon>
                  <DashboardIcon/>
                </ListItemIcon>
                <ListItemText primary="Search" />
              </ListItem>
            </Link>

        </ListItem>
      </div>

      <div>

      <Link to="/Dashboard/SearchPatient" className="no-style-link">
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon/>
          </ListItemIcon>
          <ListItemText primary="Patient" />
        </ListItem>
      </Link>

      </div>

      <div>
          <ListItem button onClick={() => showDiv('DepartmentDD')}>
            <ListItemIcon>
              <DashboardIcon/>
            </ListItemIcon>
            <ListItemText primary="Department" />
          </ListItem>
          <ListItem id="DepartmentDD" style={{backgroundColor:'#fff',display:'none'}}>
              
              <Link to="/Dashboard/AddDepartment" className="no-style-link">
                <ListItem button>
                  <ListItemIcon>
                    <DashboardIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Add new" />
                </ListItem>
              </Link>

              <Link to="/Dashboard/SearchDepartment" className="no-style-link">
                <ListItem button onClick={() => console.log('Search emp clicked')}>
                  <ListItemIcon>
                    <DashboardIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Search" />
                </ListItem>
              </Link>


              <ListItem button onClick={() => showDiv('TreatmentDD')}>
                <ListItemIcon>
                  <DashboardIcon/>
                </ListItemIcon>
                <ListItemText primary="Treatment" />
              </ListItem>
              <ListItem button id="TreatmentDD" style={{backgroundColor:'#fff',display:'none'}}>

                <Link to="/Dashboard/AddTreatment" className="no-style-link">
                  <ListItem button>
                    <ListItemIcon>
                      <DashboardIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Add Treatment" />
                  </ListItem>
                </Link>

                <Link to="/Dashboard/SearchTreatment" className="no-style-link">
                  <ListItem button>
                    <ListItemIcon>
                      <DashboardIcon/>
                    </ListItemIcon>
                    <ListItemText primary="View Treatment" />
                  </ListItem>
                </Link>

              </ListItem>

              
              <ListItem button onClick={() => showDiv('EquipmentDD')}>
                <ListItemIcon>
                  <DashboardIcon/>
                </ListItemIcon>
                <ListItemText primary="Equipment" />
              </ListItem>




              <ListItem button id="EquipmentDD" style={{backgroundColor:'#fff',display:'none'}}>

                <Link to="/Dashboard/AddEquipment" className="no-style-link">
                  <ListItemIcon>
                    <DashboardIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Add" />
                </Link>

                <Link to="/Dashboard/SearchEquipment" className="no-style-link">
                  <ListItemIcon>
                    <DashboardIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Search" />
                </Link>

              </ListItem>



          </ListItem>
        </div>

        <div>
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon/>
            </ListItemIcon>
            <ListItemText primary="Manage User" />
          </ListItem>
        </div>

        <div>
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon/>
            </ListItemIcon>
            <ListItemText primary="Change Password" />
          </ListItem>
        </div>
        
      </>
        : null
    }

    {
      localStorage.getItem('dental_userType') === 'department' ?
      <>
        <ListItem button onClick={() => showDiv('PatientDD')} >
          <ListItemIcon>
            <DashboardIcon/>
          </ListItemIcon>
          <ListItemText primary="Patient" />
        </ListItem>

      <ListItem id="PatientDD" style={{backgroundColor:'#fff',display:'none'}}>
              
              <Link to="/Dashboard/SearchPatient" className="no-style-link">
                <ListItem button>
                  <ListItemIcon>
                    <DashboardIcon/>
                  </ListItemIcon>
                  <ListItemText primary="View Patient" />
                </ListItem>
              </Link>

              <Link to="/Dashboard/ProposedTreatment" className="no-style-link">
                <ListItem button>
                  <ListItemIcon>
                    <DashboardIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Proposed Treatment" />
                </ListItem>
              </Link>

              <Link to="/Dashboard/PhysicalExamination" className="no-style-link">
                <ListItem button>
                  <ListItemIcon>
                    <DashboardIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Physical Examination" />
                </ListItem>
              </Link>

      </ListItem>

      <ListItem button onClick={() => showDiv('TreatmentDD')}>
        <ListItemIcon>
          <DashboardIcon/>
        </ListItemIcon>
        <ListItemText primary="Treatment" />
      </ListItem>
      <ListItem button id="TreatmentDD" style={{backgroundColor:'#fff',display:'none'}}>

        <Link to="/Dashboard/AddTreatment" className="no-style-link">
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon/>
            </ListItemIcon>
            <ListItemText primary="Add Treatment" />
          </ListItem>
        </Link>

        <Link to="/Dashboard/SearchTreatment" className="no-style-link">
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon/>
            </ListItemIcon>
            <ListItemText primary="View Treatment" />
          </ListItem>
        </Link>

      </ListItem>



      </>
      :
      null
    }
      </>
      
  );

  export const secondaryListItems = (
    <div>
      <ListSubheader inset>Saved reports</ListSubheader>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Current month" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Last quarter" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Year-end sale" />
      </ListItem>
    </div>
  );
