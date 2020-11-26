const mongoose = require('mongoose');

mongoose.Promise=global.Promise;

(async () => {
	try{
		await mongoose.connect('mongodb://localhost/employees', {useNewUrlParser: true});
        console.log("Successfully Connected");
    } catch(e) {
		console.log("Failed to connect. Reason:", e)
	}
})();

require('./model/employees_model.js');
require('./index.js');