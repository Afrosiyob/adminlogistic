import React from 'react';

import Typography from '@material-ui/core/Typography';
import TodoAddressForm from './TodoAddressForm';
import TodoAddressList from './TodoAddressList';
import useTodoState from './useTodoState';
import './styles.css';

function TodoAddress() {
  const { todos, addTodo, deleteTodo } = useTodoState([]);

  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Viloyat qo'shish
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

export default TodoAddress;
