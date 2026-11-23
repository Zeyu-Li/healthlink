// toJSON transform for user models: password hashes must never appear in an API response.
module.exports = (doc, ret) => {
  delete ret.passwordHash;
  return ret;
};
