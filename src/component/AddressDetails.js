import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";

const AddressDetails = ({ setFormData, formData, handleNext,handleBack }) => {
  const handleChangeData = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [addressLine1Error, setAddressLine1Error] = useState("");
  const [addressLine2Error, setAddressLine2Error] = useState("");
  const [cityError, setCityError] = useState("");
  const [stateError, setStateError] = useState("");
  const [countryError, setCountryError] = useState("");
  const [pinCodeError, setPinCodeError] = useState("");

  const handleErrors = () => {
    if (formData.addressLine1 === "") {
      setAddressLine1Error("AddressLine1 is a required field");
    } else {
      setAddressLine1Error("");
    }

    if (formData.addressLine2 === "") {
      setAddressLine2Error("AddressLine2 is a required field");
    } else {
      setAddressLine2Error("");
    }

    if (formData.city === "") {
      setCityError("City is a required field");
    } else {
      setCityError("");
    }

    if (formData.state === "") {
      setStateError("State is a required field");
    } else {
      setStateError("");
    }

    if (formData.country === "") {
      setCountryError("Country is a required field");
    } else {
      setCountryError("");
    }

    if (formData.pinCode === "") {
      setPinCodeError("PinCode is a required field");
    } else {
      setPinCodeError("");
    }
  };

  const handleNextPage = () => {
    handleErrors();
    if (
      formData.addressLine1 !== "" &&
      formData.addressLine2 !== "" &&
      formData.city !== "" &&
      formData.state !== "" &&
      formData.country !== "" &&
      formData.pinCode !== "" 
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
              label="Address Line 1"
              variant="outlined"
              name="addressLine1"
              onChange={(e) => {
                handleChangeData(e);
              }}
            />
            <Box className="error-message">{addressLine1Error}</Box>
            <FormControl className="user-info-input">
              <InputLabel id="demo-simple-select-label">City</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="city"
                value={formData.city}
                label="Age"
                onChange={(e) => {
                  handleChangeData(e);
                }}
              >
                <MenuItem value={"ahmedabad"}>Ahmedabad</MenuItem>
                <MenuItem value={"surat"}>Surat</MenuItem>
                <MenuItem value={"rajkot"}>Rajkot</MenuItem>
                <MenuItem value={"amreli"}>Amreli</MenuItem>
                <MenuItem value={"vadodara"}>Vadodara</MenuItem>
              </Select>
            </FormControl>
            <Box className="error-message">{cityError}</Box>
            <FormControl className="user-info-input">
              <InputLabel id="demo-simple-select-label">Country</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="country"
                value={formData.country}
                label="country"
                onChange={(e) => {
                  handleChangeData(e);
                }}
              >
                <MenuItem value={"india"}>India</MenuItem>
                <MenuItem value={"usa"}>Usa</MenuItem>
                <MenuItem value={"australia"}>Australia</MenuItem>
              </Select>
            </FormControl>
            <Box className="error-message">{countryError}</Box>
          </Box>
        </Box>
        <Box className="user-info-fields">
          <Box className="user-info">
            <TextField
              className="user-info-input"
              id="outlined-basic"
              label="Address Line 2"
              name="addressLine2"
              variant="outlined"
              onChange={(e) => {
                handleChangeData(e);
              }}
            />
            <Box className="error-message">{addressLine2Error}</Box>
            <FormControl className="user-info-input">
              <InputLabel id="demo-simple-select-label">State</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formData.state}
                label="Age"
                name="state"
                onChange={(e) => {
                  handleChangeData(e);
                }}
              >
                <MenuItem value={"gujarat"}>Gujarat</MenuItem>
                <MenuItem value={"panjab"}>Panjab</MenuItem>
                <MenuItem value={"maharastra"}>Maharastra</MenuItem>
                <MenuItem value={"rajasthan"}>Rajasthan</MenuItem>
                <MenuItem value={"jammu"}>Jammu</MenuItem>
              </Select>
            </FormControl>
            <Box className="error-message">{stateError}</Box>
            <TextField
              className="user-info-input"
              id="outlined-basic"
              label="Pin Code"
              variant="outlined"
              name="pinCode"
              onChange={(e) => {
                handleChangeData(e);
              }}
            />
            <Box className="error-message">{pinCodeError}</Box>
          </Box>
        </Box>
      </Box>
      <Box className="back-next-btn">
        <Button variant="contained" color="primary" onClick={handleBack}>
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={handleNextPage}>
          Next
        </Button>
      </Box>
    </>
  );
};

export default AddressDetails;
