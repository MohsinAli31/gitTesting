const express = require('express');
const urlCheck = require('./middleware/url');
const router = express.Router();
const app = express();
const port = 3000;
// app.METHOD(PATH, HANDLER)
//app.all handles all types of requests
// app.all('/user', function (req, res, next) {
// 	res.send('USER API CALLED');
// 	next();
// });

// app.use(urlCheck); // for global routes middleware working for all routes(url)

// router.get('/', urlCheck, (req, res) => {
// 	res.send('Hello Mohsin to home page here');
// });

app.post('/', (req, res) => {
	res.send('Post request at home page');
});
app.post('/post', (req, res) => {
	res.send('Post request at home page');
});
router.put('/user', urlCheck, (req, res) => {
	res.send('PUT request at /user and applying middleware');
});
router.delete('/delete', urlCheck, (req, res) => {
	res.send('Got a DELETE request at /user');
});
app.use('/', router); //for specific route working for specific url

app.listen(port, () => {
	console.log(`app listening on port ${port}`);
});
