import { Component} from "react";
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };


  // constructor() {
  //   super();
  //   this.state = {};
  // }

  render() {
    const { values, handleChange } = this.props;
    // const { values} = this.props;
    return (
      <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Personal Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstname"
            name="firstname"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={handleChange}
            defaultValue={values.firstname}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastname"
            name="lastname"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onChange={handleChange}
            defaultValue={values.lastname}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onChange={handleChange}
            defaultValue={values.email}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phone"
            name="phone"
            label="Phone"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onChange={handleChange}
            defaultValue={values.phone}
          />
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    {/* <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button> */}

                  <Button
                    variant="contained"
                    onClick={this.continue}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    Next
                  </Button>
                </Box>
    </React.Fragment>
      // <Fragment>
      //   <AppBar style={{ background: "#2E3B55" }} position="sticky">
      //     <Toolbar title="Enter User Details">
      //       <Typography color="inherit" variant="title">
      //         Enter User Details
      //       </Typography>
      //     </Toolbar>
      //   </AppBar>
      //   <TextField
      //     label="First Name"
      //     name='firstname'
      //     onChange={handleChange}
      //     defaultValue={values.firstName}
      //   />
      //   <br />
      //   <TextField
      //     label="Last Name"
      //     name='lastname'
      //     onChange={handleChange}
      //     defaultValue={values.lastName}
      //   />
      //   <br />
      //   <TextField
      //     label="Email"
      //     name='email'
      //     onChange={handleChange}
      //     defaultValue={values.Email}
      //   />
      //   <br />
      //   <TextField
      //     label="Phone"
      //     name='phone'
      //     onChange={handleChange}
      //     defaultValue={values.Email}
      //   />
      //   <br />
      //   <br />

      //   <Button
      //     style={{ background: "#2E3B55", color: "#FFFFFF" }}
      //     label="Continue"
      //     onClick={this.continue}
      //   >
      //     Continue
      //   </Button>
      // </Fragment>
    );
  }
}

export default FormUserDetails;