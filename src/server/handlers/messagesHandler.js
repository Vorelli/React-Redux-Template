var messagesHandler = (req, res) => {
  res.json(res.locals.entries.messages);
};

module.exports = messagesHandler;