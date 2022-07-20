import { Component} from "react";
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextareaAutosize from '@mui/material/TextareaAutosize';


export class FormUserSkills extends Component {
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
        Enter Skills
      </Typography>
      <Grid container spacing={3}>

      <Grid item xs={12} sm={6}>
          <TextField
            required
            id="skill1"
            name="skill1"
            label="Enter Skill 1"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={handleChange}
            defaultValue={values.skill1}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="skill2"
            name="skill2"
            label="Enter Skill 2"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={handleChange}
            defaultValue={values.skill2}
          />
        </Grid> 
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="skill3"
            name="skill3"
            label="Enter Skill 3"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={handleChange}
            defaultValue={values.skill3}
          />
        </Grid> 
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="skill4"
            name="skill4"
            label="Enter Skill 4"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={handleChange}
            defaultValue={values.skill4}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="skill5"
            name="skill5"
            label="Enter Skill 5"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={handleChange}
            defaultValue={values.skill5}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="skill6"
            name="skill6"
            label="Enter Skill 6"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={handleChange}
            defaultValue={values.skill6}
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

export default FormUserSkills;