import React, { Component, Fragment } from "react";
import {
  AppBar,
  Button,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";



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
      <Fragment>
        <AppBar style={{ background: "#2E3B55" }} position="sticky">
          <Toolbar title="Enter User Details">
            <Typography color="inherit" variant="title">
              Enter User Details
            </Typography>
          </Toolbar>
        </AppBar>
        <TextField
          label="First Name"
          name='firstname'
          onChange={handleChange}
          defaultValue={values.firstName}
        />
        <br />
        <TextField
          label="Last Name"
          name='lastname'
          onChange={handleChange}
          defaultValue={values.lastName}
        />
        <br />
        <TextField
          label="Email"
          name='email'
          onChange={handleChange}
          defaultValue={values.Email}
        />
        <br />
        <TextField
          label="Phone"
          name='phone'
          onChange={handleChange}
          defaultValue={values.Email}
        />
        <br />
        <br />

        <Button
          style={{ background: "#2E3B55", color: "#FFFFFF" }}
          label="Continue"
          onClick={this.continue}
        >
          Continue
        </Button>
      </Fragment>
    );
  }
}

export default FormUserDetails;