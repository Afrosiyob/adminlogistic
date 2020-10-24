import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
  Button,
  ButtonGroup
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import Logo from 'src/components/Logo';
import { useTranslation } from 'react-i18next';
const useStyles = makeStyles(theme => ({
  root: {},
  avatar: {
    width: 60,
    height: 60
  }
}));

const TopBar = ({ className, onMobileNavOpen, ...rest }) => {
  const classes = useStyles();
  const [notifications] = useState([]);
  const { i18n } = useTranslation();

  const [lang, setlang] = useState('uz');

  const changeLang = lang => {
    setlang(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <AppBar className={clsx(classes.root, className)} elevation={0} {...rest}>
      <Toolbar>
        <RouterLink to="/">
          <Logo sizeW={50} sizeH="auto" />
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

        <Hidden lgUp>
          <IconButton color="inherit" onClick={onMobileNavOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

export default TopBar;
