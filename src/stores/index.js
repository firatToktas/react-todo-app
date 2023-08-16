import { configureStore } from '@reduxjs/toolkit';
import todo from './todo.js';
import auth from './auth.js';
const store = configureStore({
  reducer: {
    todo,
    auth
  }
});

export default store;