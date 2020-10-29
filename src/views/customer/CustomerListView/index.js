import React, { useState, useEffect } from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Results from './Results';
import Toolbar from './Toolbar';
import data from './data';
import axios from 'axios';
import { get } from 'lodash';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const CustomerListView = () => {
  const classes = useStyles();
  const [customers] = useState(data);
  const [users, setUsers] = useState();
  const [page, setPage] = useState(1);

  const getData = page => {
    let token = localStorage.getItem('logen-authorization');

    axios
      .get(`http://195.158.2.207/api/v1/users?page=${page}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        console.log('====================================');
        console.log(res.data.data);
        console.log('====================================');
        setUsers(res.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    getData(page);
  }, []);

  console.log('fdghdrgyr', get(users, 'data', []));

  const handleChange = numberPage => {
    setPage(page + numberPage);
    setTimeout(() => {
      getData(page);
    }, 1000);
    console.log('change page====================================');
    console.log(page);
    console.log('====================================');
  };

  return (
    <Page className={classes.root} title="Customers">
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          {users && (
            <div>
              <Results customers={customers} users={users} />

              <button
                onClick={() => {
                  handleChange(2);
                }}
              >
                {' '}
                next{' '}
              </button>
            </div>
          )}
        </Box>
      </Container>
    </Page>
  );
};

export default CustomerListView;
