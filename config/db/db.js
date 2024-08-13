const mongoose = require('mongoose');

async function connect() {
	try {
		mongoose.set("strictQuery", false);
		mongoose.connect(process.env.MONGODB_URL)
			.then(() => {
				console.log('Kết nối cơ sở dữ liệu thành công');
			});
	}
	catch (error) {
		console.log('Kết nối cơ sở dữ liệu thất bại');
	}
}

module.exports = { connect };