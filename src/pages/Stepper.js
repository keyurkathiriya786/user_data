import React, { useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Box } from "@mui/material";
import UserInformation from "../component/UserInformation";
import AddressDetails from "../component/AddressDetails";
import ThankYou from "../component/ThankYou";

const Home = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    mobileNo: "",
    email: "",
    birthDay: "",
    age: "",
    bloodGroup: "",
    height: "",
    weight: "",
    gender: "",
    maritalStatus: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
  });

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  return (
    <Box className="stepper-main-container">
      <Stepper className="stepper" activeStep={activeStep}>
        <Step className="step">
          <StepLabel className="step-label">USER INFORMATION</StepLabel>
        </Step>
        <Step>
          <StepLabel>ADDRESS DETAILS</StepLabel>
        </Step>
        <Step>
          <StepLabel>THANK YOU</StepLabel>
        </Step>
      </Stepper>
      {activeStep === 0 && (
        <div>
          <UserInformation
            setFormData={setFormData}
            formData={formData}
            handleNext={handleNext}
          />
        </div>
      )}
      {activeStep === 1 && (
        <div>
          <AddressDetails
            setFormData={setFormData}
            formData={formData}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        </div>
      )}
      {activeStep === 2 && (
        <div>
          <ThankYou data={formData} />
        </div>
      )}
    </Box>
  );
};

export default Home;
