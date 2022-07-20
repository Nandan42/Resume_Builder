import { Component} from "react";
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextareaAutosize from '@mui/material/TextareaAutosize';


export class FormUserProfile extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    // const { values} = this.props;
    return (
      <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Enter Profile
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>

          <TextareaAutosize
            id="profile"
            name="profile"
            label="Profile"
            fullWidth
            variant="standard"
            onChange={handleChange}
            defaultValue={values.profile}
            minRows={10}
            placeholder="Enter profile..."
            style={{ width: 700 }}

          />
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button onClick={this.back} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>

                  <Button
                    variant="contained"
                    onClick={this.continue}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    Next
                  </Button>
                </Box>
    </React.Fragment>
    );
  }
}

export default FormUserProfile;