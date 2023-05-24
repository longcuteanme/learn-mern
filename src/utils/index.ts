const bcrypt = require("bcrypt")

const getHashedPassword = (password: string) => {
  const saltRounds = (Math.random() * 10).toFixed();
  if (!password) return password;
  return bcrypt.hash(password, saltRounds);
};

const compareHashedPassword = (password: string, hash: string) => {
  if (!password || !hash) return false;
  return bcrypt.compare(password, hash);
};

module.exports = { getHashedPassword, compareHashedPassword };
