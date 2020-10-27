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

const useStyles = makeStyles(() => ({
  root: {}
}));

const ProfileDetails = ({ className, ...rest }) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    fullName: '',

    phonenumber: '',
    currentPassword: '',
    password: '',
    confirmpassword: ''
  });

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
          <Button color="primary" variant="contained">
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
