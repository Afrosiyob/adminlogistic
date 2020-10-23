import React from 'react';
import { Box, Container, makeStyles, Grid } from '@material-ui/core';
import Page from 'src/components/Page';
import TodoAddress from './TodoAddress/TodoAddress';
import TodoCar from './TodoCar/TodoCar';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(10)
  }
}));

const SettingsView = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Settings">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item lg={6} md={12} xs={12}>
            <TodoAddress />
          </Grid>
          <Grid item lg={6} md={12} xs={12}>
            <TodoCar />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default SettingsView;
