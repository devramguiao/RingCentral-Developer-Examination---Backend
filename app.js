const express = require('express');
const app = express();
const moment = require('moment');
const today = moment();
const cors = require('cors');
const PORT = 3000;

app.use(cors());

app.get("/ringcentral-exam", (req, res, next) => {
	res.status(200).send({
	    success: 'true',
	    message: 'Successfully retrieved from API',
	    data: { currentDateTime: today.format('YYYY-MM-DD hh:mm:ss')}
	  });
});

app.listen(PORT, () => {
	console.log(`server running at http://localhost:${PORT}`);
});