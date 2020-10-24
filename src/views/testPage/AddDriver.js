import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography,
  makeStyles,
  Card,
  CardContent
} from '@material-ui/core';
import Page from 'src/components/Page';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const AddDriver = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Page className={classes.root} title="Register">
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <Card>
            <CardContent>
              <Formik
                initialValues={{
                  firstName: '',
                  lastName: '',
                  password: '',
                  password_confirm: '',
                  telephone: '',
                  car_number: '',
                  mass_one: '',
                  mass_two: '',
                  passport: '',
                  tech_passport: ''
                }}
                validationSchema={Yup.object().shape({
                  firstName: Yup.string()
                    .max(255)
                    .required('First name is required'),
                  lastName: Yup.string()
                    .max(255)
                    .required('Last name is required'),
                  password: Yup.string()
                    .max(255)
                    .required('password is required'),
                  password_confirm: Yup.string()
                    .oneOf([Yup.ref('password'), null], 'Passwords must match')
                    .required('password is required'),
                  telephone: Yup.number()
                    .min(7, 'Must be more than 10 characters')
                    .required('This field is requried'),
                  car_number: Yup.string().required('Required'),
                  mass_one: Yup.number('plase enter number').required(
                    'required'
                  ),
                  mass_two: Yup.number('plase enter number').required(
                    'required'
                  ),
                  passport: Yup.mixed().required('A file is required'),
                  tech_passport: Yup.mixed().required('A file is required')
                })}
                onSubmit={(values, isSubmitting) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                  }, 500);
                }}
              >
                {({
                  errors,
                  handleBlur,
                  handleChange,
                  handleSubmit,
                  isSubmitting,
                  touched,
                  values
                }) => (
                  <form onSubmit={handleSubmit}>
                    <Box mb={3}>
                      <Typography color="textPrimary" variant="h2">
                        Create new account
                      </Typography>
                      <Typography
                        color="textSecondary"
                        gutterBottom
                        variant="body2"
                      >
                        Use your email to create new account
                      </Typography>
                    </Box>
                    <TextField
                      error={Boolean(touched.firstName && errors.firstName)}
                      fullWidth
                      helperText={touched.firstName && errors.firstName}
                      label="First name"
                      margin="normal"
                      name="firstName"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.firstName}
                      variant="outlined"
                    />
                    <TextField
                      error={Boolean(touched.lastName && errors.lastName)}
                      fullWidth
                      helperText={touched.lastName && errors.lastName}
                      label="Last name"
                      margin="normal"
                      name="lastName"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.lastName}
                      variant="outlined"
                    />

                    <TextField
                      error={Boolean(touched.password && errors.password)}
                      fullWidth
                      helperText={touched.password && errors.password}
                      label="Password"
                      margin="normal"
                      name="password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="password"
                      value={values.password}
                      variant="outlined"
                    />

                    <TextField
                      error={Boolean(
                        touched.password_confirm && errors.password_confirm
                      )}
                      fullWidth
                      helperText={
                        touched.password_confirm && errors.password_confirm
                      }
                      label="Password"
                      margin="normal"
                      name="password_confirm"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="password"
                      value={values.password_confirm}
                      variant="outlined"
                    />
                    <TextField
                      error={Boolean(touched.telephone && errors.telephone)}
                      fullWidth
                      helperText={touched.telephone && errors.telephone}
                      label="Telefon"
                      margin="normal"
                      name="telephone"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="text"
                      value={values.telephone}
                      variant="outlined"
                    />

                    <TextField
                      error={Boolean(touched.car_number && errors.car_number)}
                      fullWidth
                      helperText={touched.car_number && errors.car_number}
                      label="car_number"
                      margin="normal"
                      name="car_number"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="text"
                      value={values.car_number}
                      variant="outlined"
                    />

                    <TextField
                      error={Boolean(touched.mass_one && errors.mass_one)}
                      fullWidth
                      helperText={touched.mass_one && errors.mass_one}
                      label="mass_one"
                      margin="normal"
                      name="mass_one"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="text"
                      value={values.mass_one}
                      variant="outlined"
                    />
                    <TextField
                      error={Boolean(touched.mass_two && errors.mass_two)}
                      fullWidth
                      helperText={touched.mass_two && errors.mass_two}
                      label="mass_two"
                      margin="normal"
                      name="mass_two"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="text"
                      value={values.mass_two}
                      variant="outlined"
                    />

                    <TextField
                      error={Boolean(touched.passport && errors.passport)}
                      fullWidth
                      helperText={touched.passport && errors.passport}
                      label="passport"
                      margin="normal"
                      name="passport"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="file"
                      value={values.passport}
                      variant="outlined"
                    />

                    <TextField
                      error={Boolean(
                        touched.tech_passport && errors.tech_passport
                      )}
                      fullWidth
                      helperText={touched.tech_passport && errors.tech_passport}
                      label="tech_passport"
                      margin="normal"
                      name="tech_passport"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="file"
                      value={values.tech_passport}
                      variant="outlined"
                    />
                    {/* fwfwefwefwefewfwefwefwefwefwefwefwefwefwefweffewfwef */}
                    {/* <Box alignItems="center" display="flex" ml={-1}>
                  <Checkbox
                    checked={values.policy}
                    name="policy"
                    onChange={handleChange}
                  />
                  <Typography color="textSecondary" variant="body1">
                    I have read the{' '}
                    <Link
                      color="primary"
                      component={RouterLink}
                      to="#"
                      underline="always"
                      variant="h6"
                    >
                      Terms and Conditions
                    </Link>
                  </Typography>
                </Box> */}

                    <Box my={2}>
                      <Button
                        color="primary"
                        disabled={isSubmitting}
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                      >
                        Add Drivers
                      </Button>
                    </Box>
                  </form>
                )}
              </Formik>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </Page>
  );
};

export default AddDriver;
