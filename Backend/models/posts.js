const mongoose = require("mongoose");

const postScheema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	director: {
		type: String,
		required: true,
	},
	actors: {
		type: String,
		required: true,
	},
	ticketPrice: {
		type: String ,
		required: true,
	},
	startDate: {
		type: String,
		required: true,
	},
	endDate: {
		type: String,
		required: true,
	},
	filmHall: {
		type: String,
		required: true,
	},
	time: {
		type: String,
		required: true,
	},
	//     },
	//    image:{
	//         type:String,
	//         required:true
	//     },
});

module.exports = mongoose.model("Posts", postScheema);
