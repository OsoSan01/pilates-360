module.exports = function(req, res, next) {
    //use status code of 401 Unauthorized
    if (!req.user) return res.statos(401).jason('Unauthorized')
    //A ok
    next();
};