import React, { Component } from "react";
import FormUserDetails from "./components/FormUserDetails";
import FormUserSocial from "./components/FormUserSocial";
import axios from "axios"
import { saveAs } from 'file-saver'
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

  
function getStepContent(step, values, prevStep, nextStep, handleChange, handleSubmit) {
    switch (step) {
      case 1:
        return (
                  <FormUserDetails
                  nextStep={nextStep}
                  handleChange={handleChange}
                  values={values}
                />
        )  ;
      case 2:
        return (
                  <FormUserSocial
                  handleSubmit={handleSubmit}
                  prevStep={prevStep}
                  handleChange={handleChange}
                  values={values}
                />
        ) ;
      default:
        throw new Error('Unknown step');
    }
  }




export class Resume extends Component{
    state = {
        step: 1,
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        github: '',
        linkedin: '',
        facebook: '',
        instagram: ''
    }


    nextStep = () => {
        const {step} = this.state
        this.setState({step: step+1});
    }

    prevStep = () => {
        const {step} = this.state
        this.setState({step: step-1});       
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }


    handleSubmit = () => {
        axios.post('http://localhost:4000/create-pdf', this.state)
          .then(() => axios.get('http://localhost:4000/fetch-pdf', { responseType: 'blob' }))
          .then((res) => {
            const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
    
            saveAs(pdfBlob, 'newPdf.pdf');
          })
      }


    render(){
        const {step} = this.state
        const { firstname, lastName, email, phone, github, linkedin, facebook, instagram } = this.state;
        const values = { firstname, lastName, email, phone, github, linkedin, facebook, instagram } 
        

        const steps = ['User Details ', 'User socials'];


        const theme = createTheme();

        return(
            <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar
              position="absolute"
              color="default"
              elevation={0}
              sx={{
                position: 'relative',
                borderBottom: (t) => `1px solid ${t.palette.divider}`,
              }}
            >
              <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                  Company name
                </Typography>
              </Toolbar>
            </AppBar>
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
              <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                <Typography component="h1" variant="h4" align="center">
                  Checkout
                </Typography>
                <Stepper activeStep={step} sx={{ pt: 3, pb: 5 }}>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
                <React.Fragment>
                  {step === steps.length+1 ? (
                    <React.Fragment>
                      <Typography variant="h5" gutterBottom>
                        Thank you.
                      </Typography>
                      <Typography variant="subtitle1">
                        Your resume shall commence being downloaded now.
                      </Typography>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      {getStepContent(step,values,this.prevStep, this.nextStep, this.handleChange, this.handleSubmit)}
                    </React.Fragment>
                  )}
                </React.Fragment>
              </Paper>
            </Container>
          </ThemeProvider>
        );

        // switch(step){
        // default: return <h1>Javscript not functioning</h1>
        // case 1:
        //     return(
        //         <FormUserDetails
        //         nextStep={this.nextStep}
        //         handleChange={this.handleChange}
        //         values={values}
        //       />
        //     )
        // case 2:
        //     return(
        //         <FormUserSocial
        //         handleSubmit={this.handleSubmit}
        //         prevStep={this.prevStep}
        //         handleChange={this.handleChange}
        //         values={values}
        //       />
        //     )
        // }
        // }
    }
}
export default Resume;