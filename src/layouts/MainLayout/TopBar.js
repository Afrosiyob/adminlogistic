import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  AppBar,
  Toolbar,
  makeStyles,
  Button,
  ButtonGroup
} from '@material-ui/core';
import Logo from 'src/components/Logo';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles({
  root: {},
  toolbar: {
    height: 64
  }
});

const TopBar = ({ className, ...rest }) => {
  const classes = useStyles();
  const { i18n } = useTranslation();

  const [lang, setlang] = useState('uz');

  const changeLang = lang => {
    setlang(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <AppBar className={clsx(classes.root, className)} elevation={0} {...rest}>
      <Toolbar className={classes.toolbar}>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        <Box flexGrow={1} />
        <ButtonGroup
          variant="contained"
          color="primary"
          aria-label="contained white button group"
        >
          <Button
            onClick={() => {
              changeLang('uz');
            }}
          >
            {' '}
            UZ
          </Button>
          <Button
            onClick={() => {
              changeLang('ru');
            }}
          >
            RU
          </Button>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string
};

export default TopBar;
