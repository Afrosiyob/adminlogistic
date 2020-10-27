import React, { useState, useEffect } from 'react';
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
  makeStyles,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  FormHelperText
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const variants = ['h1', 'h3', 'body1', 'caption'];

function TypographyDemo(props) {
  const { loading = false } = props;

  return (
    <div>
      {variants.map(variant => (
        <Typography component="div" key={variant} variant={variant}>
          {loading ? <Skeleton /> : variant}
        </Typography>
      ))}
    </div>
  );
}

TypographyDemo.propTypes = {
  loading: PropTypes.bool
};

const myMassArry = [];

const ProductDetail = ({ className, ...rest }) => {
  const [isMyBool, setIsMyBool] = useState(false);
  const [myUsers, setMyUsers] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    let token = localStorage.getItem('logen-authorization');
    if (token === null) token = '';
    token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmOTQ3ZjQ5NmYxZjFlNzBiNGU4YmE2NSIsImlhdCI6MTYwMzcwOTQ1MywiZXhwIjoxNjA2MzAxNDUzfQ.40ca0I8Ii83-9chdXOaIvRDhty3XM6J6aeFgFQ-7pyc';
    axios({
      method: 'get',
      url: 'http://195.158.2.207/api/v1/users',
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
      .then(result => {
        for (let i = 0; i < result.data.data.length; i++) {
          if (!myMassArry.includes(result.data.data[i].baggageMass))
            myMassArry.push(result.data.data[i].baggageMass);
        }
        setMyUsers(result.data.data);
        myMassArry.sort(function(a, b) {
          return a - b;
        });
        console.log(myMassArry);
      })
      .catch(err => console.log(err));
  }, []);

  const classes = useStyles();
  const [values, setValues] = useState({
    weight: '',
    message: ''
  });

  const hundlClik = () => {
    setIsMyBool(true);
    let token = localStorage.getItem('logen-authorization');
    if (token === null) token = '';
    token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmOTQ3ZjQ5NmYxZjFlNzBiNGU4YmE2NSIsImlhdCI6MTYwMzcwOTQ1MywiZXhwIjoxNjA2MzAxNDUzfQ.40ca0I8Ii83-9chdXOaIvRDhty3XM6J6aeFgFQ-7pyc';

    axios({
      method: 'post',
      url: 'http://195.158.2.207/api/v1/users/sendmessage',
      data: {
        baggageMass: `${values.weight}`,
        textMessage: values.message
      },
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
      .then(result => {
        if (result.data.success) setOpenSuccess(true);
        else setOpenError(true);

        setIsMyBool(false);
      })
      .catch(err => console.log(err));
  };

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSuccess(false);
    setOpenError(false);
  };

  return myUsers ? (
    <form noValidate className={clsx(classes.root, className)} {...rest}>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={openSuccess}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          {t('auth.success')}
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={openError}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error">
          {t('auth.err')}
        </Alert>
      </Snackbar>
      <Card>
        <CardHeader
          subheader={t('sendMsg.subheader')}
          title={t('sendMsg.title')}
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={12} xs={12}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  {t('sendMsg.mass')}
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={values.weight}
                  onChange={handleChange}
                  label="Age"
                  name="weight"
                >
                  <MenuItem value="" disabled>
                    {t('sendMsg.mass')}
                  </MenuItem>
                  {myMassArry.map(item => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                  <MenuItem value={'ALL'}>{t('sendMsg.all')}</MenuItem>
                </Select>
                <FormHelperText> {t('sendMsg.enterMass')} </FormHelperText>
              </FormControl>
            </Grid>

            <Grid item md={12} xs={12}>
              <TextField
                helperText={t('sendMsg.enterMsg')}
                fullWidth
                rows={4}
                multiline
                label={t('sendMsg.enterMsg')}
                name="message"
                onChange={handleChange}
                required
                value={values.message}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box display="flex" justifyContent="flex-end" p={2}>
          <Button
            disabled={isMyBool}
            onClick={hundlClik}
            color="primary"
            variant="contained"
          >
            {t('sendMsg.sendSMS')}
          </Button>
        </Box>
      </Card>
    </form>
  ) : (
    // scleton
    <Grid container spacing={8}>
      <Grid item xs>
        <TypographyDemo loading />
      </Grid>
    </Grid>
  );
};

ProductDetail.propTypes = {
  className: PropTypes.string
};

export default ProductDetail;
