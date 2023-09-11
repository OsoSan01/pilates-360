const jwt = require('jsonwebtoken');

module.exports = async function token(req, res, next) {
  try {
  // Check for the token being sent in a header or as a query parameter
  const token = req.headers['authorization'].split(" ")[1];
  //decoding password using secret
  jwt.verify(token, process.env.SECRET, (error, decoded) => {
    if (error) {
      return res.status(401).send({
        message: "Auth Failed",
        success: false,
      });
    } else {
      req.body.userId= decoded.id;
      next();
    }
  });

}catch (error) {
  return res.status(401).send({
    message: 'Auth Failed',
    success: false,
  });
}
}