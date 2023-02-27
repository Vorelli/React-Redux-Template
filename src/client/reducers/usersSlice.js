import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  users: [
    {
      _id: "001",
      first_name: 'Nate',
      last_name: 'Toscano',
      time_zone: 'EST',
      password: 'password',
      otp_key: null,
      username: 'kickalliance195@gmail.com'
    }
  ]
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    usersRequest(state) {
      state.isLoading = true;
    },
    usersRequestSuccess(state, action) {
      state.users = action.payload.users;
      state.isLoading = false;
    }
  }
});

const inProg = usersSlice.actions.usersRequest;
const success = usersSlice.actions.usersRequestSuccess;

export {
  inProg,
  success
}
export default usersSlice.reducer;