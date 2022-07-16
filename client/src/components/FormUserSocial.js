import React, { Component, Fragment } from "react";
import {
  AppBar,
  Button,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";



export class FormUserSocial extends Component {
  continue = e => {
    e.preventDefault();
    this.props.handleSubmit();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
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
          label="Github"
          name='github'
          onChange={handleChange}
          defaultValue={values.firstName}
        />
        <br />
        <TextField
          label="Linkedin"
          name='linkedin'
          onChange={handleChange}
          defaultValue={values.lastName}
        />
        <br />
        <TextField
          label="Facebook"
          name='facebook'
          onChange={handleChange}
          defaultValue={values.Email}
        />
        <br />
        <TextField
          label="Instagram"
          name='instagram'
          onChange={handleChange}
          defaultValue={values.Email}
        />
        <br />
        <br />
        <Button
          style={{ background: "#2E3B55", color: "#FFFFFF", marginRight: "10px" }}
          label="Back"
          onClick={this.back}
        >
          Previous
        </Button>
        
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

export default FormUserSocial;