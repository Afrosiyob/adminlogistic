import React from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import AddDriver from './AddDriver';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(10)
  }
}));

function TestPage() {
  const classes = useStyles();
  return (
    <Page className={classes.root} title="Account">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item lg={6} md={12} xs={12}>
            <AddDriver />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default TestPage;
