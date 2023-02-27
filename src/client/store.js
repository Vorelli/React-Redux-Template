import messagesReducer from './reducers/messagesSlice.js';
import usersReducer from './reducers/usersSlice.js';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    messagesReducer,
    usersReducer
  },
  devTools: true,
})

export {
  store
}