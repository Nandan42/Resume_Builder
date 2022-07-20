import { Component} from "react";
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextareaAutosize from '@mui/material/TextareaAutosize';


export class FormUserEducation extends Component {
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
        Enter Education
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
        <TextField
            required
            id="college"
            name="college"
            label="University"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={handleChange}
            defaultValue={values.collegeUniversity}
          />
        </Grid>
        <Grid item xs={4}>
        <TextField
            required
            id="collegeYear"
            name="collegeYear"
            label="Year"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={handleChange}
            defaultValue={values.collegeYear}
          />
        </Grid>
        <Grid item xs={3}>
        <TextField
            required
            id="collegeQualification"
            name="collegeQualification"
            label="Year"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={handleChange}
            defaultValue={values.collegeQualification}
          />
        </Grid>
        <Grid item xs={12}>
        <TextField
            required
            id="collegeDescription"
            name="collegeDescription"
            label="Description"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={handleChange}
            defaultValue={values.collegeDescription}
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

export default FormUserEducation;