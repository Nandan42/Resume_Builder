import { Component} from "react";
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextareaAutosize from '@mui/material/TextareaAutosize';


export class FormUserExperience extends Component {
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
        Enter Experience
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
        <TextareaAutosize
            id="company1"
            name="company1"
            label="Company"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            placeholder="Enter company"
            onChange={handleChange}
            defaultValue={values.company1}
          />
        </Grid>
        <Grid item xs={3}>
        <TextareaAutosize
            id="role1"
            name="role1"
            label="Role"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            placeholder="Role"
            onChange={handleChange}
            defaultValue={values.role1}
          />
        </Grid>
        <Grid item xs={3}>
        <TextareaAutosize
            id="startDate1"
            name="startDate1"
            label="Start Date"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            placeholder="Start Date"
            onChange={handleChange}
            defaultValue={values.startdate1}
          />
        </Grid>
        <Grid item xs={3}>
        <TextareaAutosize
            id="endDate1"
            name="endDate1"
            label="Year"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            placeholder="End Date"
            onChange={handleChange}
            defaultValue={values.enddate1}
          />
        </Grid>
        <Grid item xs={12}>
        <TextareaAutosize
            id="experience1"
            name="experience1"
            label="Enter first experience"
            fullWidth
            variant="standard"
            onChange={handleChange}
            defaultValue={values.experience1}
            minRows={10}
            placeholder="Enter first experience..."
            style={{ width: 700 }}

          />
        </Grid>
</Grid>

<Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={3}>
        <TextareaAutosize
            id="company2"
            name="company2"
            label="Company"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            placeholder="Enter company"
            onChange={handleChange}
            defaultValue={values.company2}
          />
        </Grid>
        <Grid item xs={3}>
        <TextareaAutosize
            id="startDate2"
            name="startDate2"
            label="Start Date"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            placeholder="Start Date"
            onChange={handleChange}
            defaultValue={values.startdate2}
          />
        </Grid>
        <Grid item xs={3}>
        <TextareaAutosize
            id="role2"
            name="role2"
            label="Role"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            placeholder="Role"
            onChange={handleChange}
            defaultValue={values.role2}
          />
        </Grid>
        <Grid item xs={3}>
        <TextareaAutosize
            id="endDate2"
            name="endDate2"
            label="Year"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            placeholder="End Date"
            onChange={handleChange}
            defaultValue={values.enddate2}
          />
        </Grid>
        <Grid item xs={12}>
        <TextareaAutosize
            id="experience2"
            name="experience2"
            label="Enter first experience"
            fullWidth
            variant="standard"
            onChange={handleChange}
            defaultValue={values.experience2}
            minRows={10}
            placeholder="Enter second experience..."
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

export default FormUserExperience;