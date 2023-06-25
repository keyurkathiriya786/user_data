import React from "react";
import { Box } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const ThankYou = ({ data }) => {
  return (
    <Box>
      <Box className="thank-you-data-added-head">Data added successfully</Box>
      <Box>
        <TableContainer component={Paper}>
          <Table
            className="thank-you-main-table"
            sx={{ minWidth: 650 }}
            aria-label="simple table"
          >
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  Name
                </TableCell>
                <TableCell align="left">Value</TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  FirstName
                </TableCell>
                <TableCell align="left">{data.firstName}</TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  MiddleName
                </TableCell>
                <TableCell align="left">{data.middleName}</TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  LastName
                </TableCell>
                <TableCell align="left">{data.lastName}</TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  MobileNo
                </TableCell>
                <TableCell align="left">{data.mobileNo}</TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  Email
                </TableCell>
                <TableCell align="left">{data.email}</TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  BirthDay
                </TableCell>
                <TableCell align="left">{data.birthDay}</TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  Age
                </TableCell>
                <TableCell align="left">{data.age}</TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  BloodGroup
                </TableCell>
                <TableCell align="left">{data.bloodGroup}</TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  Height
                </TableCell>
                <TableCell align="left">{data.height}</TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  Weight
                </TableCell>
                <TableCell align="left">{data.weight}</TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  Gender
                </TableCell>
                <TableCell align="left">{data.gender}</TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  MaritalStatus
                </TableCell>
                <TableCell align="left">{data.maritalStatus}</TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  AddressLine 1
                </TableCell>
                <TableCell align="left">{data.addressLine1}</TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  AddressLine 2
                </TableCell>
                <TableCell align="left">{data.addressLine2}</TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  City
                </TableCell>
                <TableCell align="left">{data.city}</TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  State
                </TableCell>
                <TableCell align="left">{data.state}</TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  Country
                </TableCell>
                <TableCell align="left">{data.country}</TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  PinCode
                </TableCell>
                <TableCell align="left">{data.pinCode}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default ThankYou;
