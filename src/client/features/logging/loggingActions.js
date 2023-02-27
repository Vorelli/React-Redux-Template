import { createAsyncThunk } from '@reduxjs/toolkit';

export const errorLog = createAsyncThunk(
  'log',
  ((log_value) => {
    console.error(log_value);
  })
)