import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './ToolBar.scss';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  makeStyles,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  FormHelperText
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { Search as SearchIcon } from 'react-feather';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {},
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  formControl: {
    minWidth: 200
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const Toolbar = ({ className, ...rest }) => {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [agetwo, setAgetwo] = React.useState('');

  const handleChangeone = event => {
    setAge(event.target.value);
  };

  const handleChangetwo = event => {
    setAgetwo(event.target.value);
  };

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Box display="flex" justifyContent="flex-end">
        <Button color="primary" variant="contained">
          <Link to="/app/adddriver" style={{ color: 'white' }}>
            Add Driver
          </Link>
        </Button>
      </Box>
      <Box mt={3}>
        <Card>
          <CardContent>
            <div className="top-table-wrap">
              <div className="item-left">
                <Box maxWidth={500}>
                  <TextField
                    className={classes.textField}
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SvgIcon fontSize="small" color="action">
                            <SearchIcon />
                          </SvgIcon>
                        </InputAdornment>
                      )
                    }}
                    placeholder="Search customer"
                    variant="outlined"
                  />
                </Box>
              </div>
              <div className="item-right">
                <div className="item">
                  <FormControl className={classes.formControl}>
                    <InputLabel
                      shrink
                      id="demo-simple-select-placeholder-label-label"
                    >
                      Location
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-placeholder-label-label"
                      id="demo-simple-select-placeholder-label"
                      value={age}
                      onChange={handleChangeone}
                      displayEmpty
                      className={classes.selectEmpty}
                    >
                      <MenuItem value="">All</MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <FormHelperText>Chose Location</FormHelperText>
                  </FormControl>
                </div>
                <div className="item">
                  <FormControl className={classes.formControl}>
                    <InputLabel
                      shrink
                      id="demo-simple-select-placeholder-label-label"
                    >
                      Transport type
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-placeholder-label-label"
                      id="demo-simple-select-placeholder-label"
                      value={agetwo}
                      onChange={handleChangetwo}
                      displayEmpty
                      className={classes.selectEmpty}
                    >
                      <MenuItem value="">All</MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <FormHelperText>Chose Transport type</FormHelperText>
                  </FormControl>
                </div>
                <div className="item">
                  <TextField
                    id="outlined-basic"
                    label="Massa (kub)"
                    variant="outlined"
                  />
                </div>
                <div className="item">
                  <TextField
                    id="outlined-basic"
                    label="Massa (tonna) "
                    variant="outlined"
                  />
                </div>
                <div className="item">
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string
};

export default Toolbar;
