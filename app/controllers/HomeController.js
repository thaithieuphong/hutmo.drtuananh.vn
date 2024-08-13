const Customer = require("../models/Customer");

class HomeController {

	getHome(req, res, next) {
		res.render('home');
	}

	postCustomer(req, res, next) {
		const nickName = req.body.nickName
		const phone = req.body.phone
		const require = req.body.require
		if (nickName !== '' && phone !== '' && require !== '') {
			const customer = new Customer({
				nickName,
				phone,
				description: require,
				statusCus: {
					statusVi: 'Tạo mới',
					statusEng: 'New'
				},
				resource: 'Hút mỡ Dr.Tuấn Anh'
			});
			customer.save()
				.then(() => {
					res.redirect('back')
				});
		}

		if (req.body.nickName === '' || req.body.phone === '' || req.body.require === '') {
			res.redirect("back");
		}
	}

}

module.exports = new HomeController();
