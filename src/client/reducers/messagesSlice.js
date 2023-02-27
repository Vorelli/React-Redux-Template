import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  messages: [
    {
      _id: "63fc0af29d2861ddeb997072",
      text: 'On my way',
      roomname: 'cringy_cabin',
      user_id: '001'
    }
  ]
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    messagesRequest(state) {
      state.isLoading = true;
    },
    messagesRequestSuccess(state, action) {
      state.messages = action.payload.messages;
      state.isLoading = false;
    }
  }
});


const inProg = messagesSlice.actions.messagesRequest;
const success = messagesSlice.actions.messagesRequestSuccess;
export {
  inProg,
  success
};
export default messagesSlice.reducer;