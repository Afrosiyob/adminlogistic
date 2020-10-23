import React from 'react';

import { Grid, makeStyles, Container } from '@material-ui/core';
import Page from 'src/components/Page';
import ProductDetail from './ProductDetail';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(10)
  }
}));

const ProductList = ({ className, ...rest }) => {
  const classes = useStyles();
  return (
    <Page className={classes.root} title="Products">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item lg={6} md={12} xs={12}>
            <ProductDetail />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default ProductList;
