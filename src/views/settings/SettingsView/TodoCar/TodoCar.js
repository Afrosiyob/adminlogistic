import React from 'react';

import Typography from '@material-ui/core/Typography';
import TodoAddressForm from './TodoCarForm';
import TodoAddressList from './TodoCarList';
import useTodoState from './useTodoState';
import './styles.css';

function TodoCar() {
  const { todos, addTodo, deleteTodo } = useTodoState([]);

  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Car qo'shish
      </Typography>

      <TodoAddressForm
        saveTodo={todoText => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }}
      />

      <TodoAddressList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default TodoCar;
