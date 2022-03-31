module.exports = function (req, res, next) {
	console.log('url get is ', req.originalUrl);
	next();
};
