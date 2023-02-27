import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MessageList from './MessageList.js';
import messages from '../reducers/messagesSlice.js';
import users from '../reducers/usersSlice.js';
console.log(messages, users);
const actions = {
  messages,
  users
}

var App = () => {
  const messages = useSelector(state => state['messagesReducer']['messages']);
  const isLoading = useSelector(state => state['messagesReducer']['isLoading']);
  const dispatch = useDispatch();
  const url = 'http://localhost:3000';
  const endPoints = ['messages', 'users'];

  useEffect(() => {

    endPoints.forEach(endPoint => {
      dispatch(actions[endPoint][inProg]());
      fetch(url + '/' + endPoint).then(data => data.json()).then(data => {
        dispatch(actions[endPoint][success](data));
      }).catch(err => {
        console.log(err);
      })
    })
  }, [])

  return (
    <MessageList />
  )
}

export default App;