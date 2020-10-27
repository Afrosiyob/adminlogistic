import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  makeStyles
} from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles(() => ({
  root: {}
}));



const ProfileDetails = ({ className, ...rest }) => {
  const classes = useStyles();
  const [isfetching, fetchingToggle] = useState(false);
  const [values, setValues] = useState({
    fullName: '',

    phonenumber: '',
    currentPassword: '',
    password: '',
    confirmpassword: ''
  });

  const handleClick = () => {
    fetchingToggle(true);
    console.log(values);
    let token = localStorage.getItem('logen-authorization');
    if (token === null) token = '';
    token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmOTQ3ZjQ5NmYxZjFlNzBiNGU4YmE2NSIsImlhdCI6MTYwMzgwMzc5OSwiZXhwIjoxNjA2Mzk1Nzk5fQ.5dDLGeR31_GaYsjHoYKzt5t7pjfEv2_5x6bLFF9Cei0';
    axios({
      method: 'put',
      url: 'http://195.158.2.207/api/v1/auth/updatedetails',
      data: {
        phonenumber: values.phonenumber,
        fullname: values.fullname,
        currentPassword: values.currentPassword,
        newPassword: values.password
      },
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
      .then(result => {
        console.log(result.data);
        if (result.data.success)
          fetchingToggle(false);
      })
      .catch(err => console.log(err));
  };

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form
      autoComplete="off"
      noValidate
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Card>
        <CardHeader
          subheader="Admin ma'lumotlarini o'zgartirish"
          title="Admin "
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                helperText="Fullname"
                label="FullName"
                name="fullName"
                onChange={handleChange}
                required
                value={values.fullName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                helperText="Telefon raqamingizni kiriting"
                label="Phonenumber"
                name="phonenumber"
                onChange={handleChange}
                required
                value={values.phonenumber}
                variant="outlined"
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                helperText="Eski  parolni kiriting"
                fullWidth
                label="Current passowrd"
                name="currentPassword"
                onChange={handleChange}
                required
                value={values.currentPassword}
                variant="outlined"
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                helperText="Yangi parol kiriting"
                fullWidth
                label=" New Password"
                name="password"
                onChange={handleChange}
                required
                value={values.password}
                variant="outlined"
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                helperText="Yangi kiritilgan parolni tasdiqlang"
                fullWidth
                label="Confirm New Password"
                name="confirmpassword"
                onChange={handleChange}
                required
                value={values.confirmpassword}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box display="flex" justifyContent="flex-end" p={2}>
          <Button color="primary" variant="contained" disabled={isfetching} onClick={handleClick}>
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
};

ProfileDetails.propTypes = {
  className: PropTypes.string
};

export default ProfileDetails;
