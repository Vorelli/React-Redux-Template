import { useSelector } from 'react-redux';
import MessageListItem from './MessageListItem.js';

const MessageList = () => {
  const messages = useSelector(state => state.messagesReducer.messages);
  const isLoading = useSelector(state => state.messagesReducer.isLoading);
  const users = useSelector(state => state.usersReducer.users);
  return (
    <div className="message_list">{
      (
        !isLoading ?
        (messages.map(message => {
        const user = users.filter(user => user._id === message.user_id)[0];
        return (<MessageListItem key={message._id} text={message.text} user={user} />)
        })) :
        Array(10).fill(true).map((_, i) => <div className="wave" key={i}></div>)
      )
    }</div>
  )
}

export default MessageList;