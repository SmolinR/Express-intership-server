module.exports = function validate(schema) {
  return (req, res, next) => {
    const body = req.method === 'GET' ? req.query : req.body;
    const { error } = schema.validate(body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    return next();
  };
};
