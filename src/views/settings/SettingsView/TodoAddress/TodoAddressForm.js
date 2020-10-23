import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './useInputState';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch'
    }
  },
  margin: {
    margin: theme.spacing(3)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));
const TodoAddressForm = ({ saveTodo }) => {
  const { value, reset, onChange } = useInputState();
  const classes = useStyles();
  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        saveTodo(value);
        reset();
      }}
    >
      <div>
        <TextField
          id="outlined-helperText"
          label="Add todo"
          margin="normal"
          helperText="Some important text"
          variant="outlined"
          onChange={onChange}
          value={value}
        />

        <Fab
          type="submit"
          size="small"
          color="secondary"
          aria-label="add"
          className={classes.margin}
        >
          <AddIcon />
        </Fab>
      </div>
    </form>
  );
};

export default TodoAddressForm;
