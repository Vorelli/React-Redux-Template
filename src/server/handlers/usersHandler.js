var usersHandler = (req, res) => {
  res.json(res.locals.entries.users);
};

module.exports = usersHandler;