const MessageListItem = ({ text, user }) => {
  return (<div>{ text + ' from ' + (user ? (user.first_name + ' ' + user.last_name) : 'Missing User') }</div>);
}

export default MessageListItem;