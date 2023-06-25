import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";

const UserInformation = ({ setFormData, formData, handleNext }) => {
  const [birthdayError, setBirthdayError] = useState("");
  const [bloodGroupError, setBloodGroupError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [middleNameError, setMiddleNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [mobileNoError, setMobileNoError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [heightError, setHeightError] = useState("");
  const [weightError, setWeightError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [maritalStatusError, setMaritalStatusError] = useState("");

  const handleChangeData = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleErrors = () => {
    if (formData.firstName === "") {
      setFirstNameError("FirstName is a required field");
    } else {
      setFirstNameError("");
    }

    if (formData.middleName === "") {
      setMiddleNameError("MiddleName is a required field");
    } else {
      setMiddleNameError("");
    }

    if (formData.lastName === "") {
      setLastNameError("LastName is a required field");
    } else {
      setLastNameError("");
    }

    if (formData.mobileNo === "") {
      setMobileNoError("MobileNo is a required field");
    } else {
      setMobileNoError("");
    }

    if (formData.email === "") {
      setEmailError("Email is a required field");
    } else {
      setEmailError("");
    }

    if (formData.birthDay === "") {
      setBirthdayError("Birthday is a required field");
    } else {
      setBirthdayError("");
    }

    if (formData.age === "") {
      setAgeError("Birthday is a required field");
    } else {
      setAgeError("");
    }

    if (formData.bloodGroup === "") {
      setBloodGroupError("BloodGroup is a required field");
    } else {
      setBloodGroupError("");
    }

    if (formData.height === "") {
      setHeightError("Height is a required field");
    } else {
      setHeightError("");
    }

    if (formData.weight === "") {
      setWeightError("Weight is a required field");
    } else {
      setWeightError("");
    }

    if (formData.gender === "") {
      setGenderError("Please select your Gender");
    } else {
      setGenderError("");
    }

    if (formData.maritalStatus === "") {
      setMaritalStatusError("Please selectr MaritalStatus");
    } else {
      setMaritalStatusError("");
    }
  };

  const handleNextPage = () => {
    handleErrors();
    if (
      formData.firstName !== "" &&
      formData.middleName !== "" &&
      formData.lastName !== "" &&
      formData.mobileNo !== "" &&
      formData.email !== "" &&
      formData.birthday !== "" &&
      formData.age !== "" &&
      formData.bloodGroup !== "" &&
      formData.height !== "" &&
      formData.weight !== ""
    ) {
      handleNext();
    }
  };

  return (
    <>
      <Box className="user-info-main-component">
        <Box className="user-info-fields">
          <Box className="user-info">
            <TextField
              className="user-info-input"
              id="outlined-basic"
              name="firstName"
              label="First Name"
              variant="outlined"
              onChange={(e) => {
                handleChangeData(e);
              }}
            />
            <Box className="error-message">{firstNameError}</Box>
            <TextField
              className="user-info-input"
              id="outlined-basic"
              name="lastName"
              label="Last Name"
              variant="outlined"
              onChange={(e) => {
                handleChangeData(e);
              }}
            />
            <Box className="error-message">{lastNameError}</Box>
            <TextField
              className="user-info-input"
              id="outlined-basic"
              name="email"
              label="Email"
              variant="outlined"
              onChange={(e) => {
                handleChangeData(e);
              }}
            />
            <Box className="error-message">{emailError}</Box>
            <TextField
              className="user-info-input"
              id="outlined-basic"
              label="Age"
              name="age"
              variant="outlined"
              onChange={(e) => {
                handleChangeData(e);
              }}
            />
            <Box className="error-message">{ageError}</Box>
            <TextField
              className="user-info-input"
              id="outlined-basic"
              label="Heigth"
              name="height"
              variant="outlined"
              onChange={(e) => {
                handleChangeData(e);
              }}
            />
            <Box className="error-message">{heightError}</Box>
            <Box className="user-info-radio-btn">
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  Gender
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="gender"
                  onChange={(e) => {
                    handleChangeData(e);
                  }}
                >
                  <Box className="user-info-radio">
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                  </Box>
                </RadioGroup>
              </FormControl>
              <Box className="error-message">{genderError}</Box>
            </Box>
          </Box>
        </Box>
        <Box className="user-info-fields">
          <Box className="user-info">
            <TextField
              className="user-info-input"
              id="outlined-basic"
              label="Middle Name"
              name="middleName"
              variant="outlined"
              onChange={(e) => {
                handleChangeData(e);
              }}
            />
            <Box className="error-message">{middleNameError}</Box>
            <TextField
              className="user-info-input"
              id="outlined-basic"
              name="mobileNo"
              label="Mobile No"
              variant="outlined"
              onChange={(e) => {
                handleChangeData(e);
              }}
            />
            <Box className="error-message">{mobileNoError}</Box>
            <input
              className="date-input"
              type="date"
              name="birthDay"
              value={formData.birthday}
              onChange={(e) => {
                handleChangeData(e);
              }}
              placeholder="Select your birthday"
            />
            <Box className="error-message">{birthdayError}</Box>
            <FormControl className="user-info-input">
              <InputLabel id="demo-simple-select-label">Blood Group</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="bloodGroup"
                value={formData.bloodGroup}
                label="BloodGroup"
                onChange={(e) => {
                  handleChangeData(e);
                }}
              >
                <MenuItem value={"a+"}>A+</MenuItem>
                <MenuItem value={"a-"}>A-</MenuItem>
                <MenuItem value={"b+"}>B+</MenuItem>
                <MenuItem value={"b-"}>B-</MenuItem>
                <MenuItem value={"o+"}>O+</MenuItem>
                <MenuItem value={"o-"}>O-</MenuItem>
                <MenuItem value={"ab+"}>AB+</MenuItem>
                <MenuItem value={"ab-"}>AB-</MenuItem>
              </Select>
            </FormControl>
            <Box className="error-message">{bloodGroupError}</Box>
            <TextField
              className="user-info-input"
              id="outlined-basic"
              label="Weigth"
              name="weight"
              variant="outlined"
              onChange={(e) => {
                handleChangeData(e);
              }}
            />
            <Box className="error-message">{weightError}</Box>
          </Box>
          <Box className="user-info-radio-btn">
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                Marital Status
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="maritalStatus"
                onChange={(e) => {
                  handleChangeData(e);
                }}
              >
                <Box className="user-info-radio">
                  <FormControlLabel
                    value="single"
                    control={<Radio />}
                    label="single"
                  />
                  <FormControlLabel
                    value="Married"
                    control={<Radio />}
                    label="Married"
                  />
                  <FormControlLabel
                    value="Divorced"
                    control={<Radio />}
                    label="Divorced"
                  />
                  <FormControlLabel
                    value="Widowed"
                    control={<Radio />}
                    label="Widowed"
                  />
                </Box>
                <Box className="error-message">{maritalStatusError}</Box>
              </RadioGroup>
            </FormControl>
          </Box>
        </Box>
      </Box>
      <Box className="back-next-btn">
        <Button disabled variant="contained" color="primary">
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={handleNextPage}>
          Next
        </Button>
      </Box>
    </>
  );
};

export default UserInformation;
