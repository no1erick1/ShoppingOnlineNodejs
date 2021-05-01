var Book = require('../models/allproduct');

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://thanhduong:ZiEkVHRzYCGGPc1H@cluster0.lkgli.mongodb.net/Shopping_cart?retryWrites=true&w=majority');

var books = [
new Book({
	category: 'Book',
	imagePath: 'https://upload.wikimedia.org/wikipedia/en/c/c4/TheAlchemist.jpg',
	title: 'The Alchemist',
	spec1: ' Quest, Adventure fiction, Fantasy Fiction',
	description: "Paulo Coelho's masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure. His quest will lead him to riches far different—and far more satisfying—than he ever imagined. Santiago's journey teaches us about the essential wisdom of listening to our hearts, of recognizing opportunity and learning to read the omens strewn along life's path, and, most importantly, to follow our dreams. ",
	model: 'Paulo Coelho',
	price: '40000'
}),
new Book({
	category: 'Book',
	imagePath: 'https://cdn0.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/m/image_146682.jpg',
	title: 'Harry Potter and the Cursed Child - Parts I & II',
	spec1: 'Fantasy, Drama, Adventure fiction',
	description: "While Harry grapples with a past that refuses to stay where it belongs, his youngest son Albus must struggle with the weight of a family legacy he never wanted. As past and present fuse ominously, both father and son learn the uncomfortable truth: sometimes, darkness comes from unexpected places.",
	model: 'J.K. Rowling',
	price: '50000'
}),
new Book({
	category: 'Book',
	imagePath: 'https://upload.wikimedia.org/wikipedia/en/4/4a/The_White_Tiger.JPG',
	title: 'The White Tiger',
	spec1: 'Picaresque Fiction',
	description: "The white tiger of this novel is Balram Halwai, a poor Indian villager whose great ambition leads him to the zenith of Indian business culture, the world of the Bangalore entrepreneur. On the occasion of the president of China’s impending trip to Bangalore, Balram writes a letter to him describing his transformation and his experience as driver and servant to a wealthy Indian family, which he thinks exemplifies the contradictions and complications of Indian society.",
	model: 'Aravind Adiga',
	price: '60000'
}),
new Book({
	category: 'Book',
	imagePath: 'https://upload.wikimedia.org/wikipedia/en/e/ee/Five_Point_Someone-What_not_to_do_at_IIT.jpg',
	title: 'Five Point Someone',
	spec1: 'Fiction',
	description: "Five Point Someone is Chetan Bhagat's debut novel which revolves around the lives of Ryan, Alok, and Hari. The three lads become close friends while trying hard to survive in an exceedingly competitive environment. The three boys join IIT with a passion to excel and come out successfully as the best graduates. However, their life turns upside down when their grades fall lower than they had ever expected. Meanwhile, Hari falls in love with his professor's daughter, and Alok and Ryan cannot stop disputing each other. Five Point Someone was successfully able to strike a chord with the millions of youngsters across India. Hari, Alok and Ryan have to deal with unpleasant and cynical teachers, assignments and projects, stress of unending examinations, and a stringent academic schedule. Will they be able to survive the IITs? Or will they succumb to the tedious and age-old education system of India? Five Point Someone has been adapted into hugely successful motion pictures both in Tamil and Hindi.",
	model: 'Chetan Bhagat',
	price: '70000'
}),
new Book({
	category: 'Book',
	imagePath: 'https://upload.wikimedia.org/wikipedia/en/1/18/TheHandmaidsTale%281stEd%29.jpg',
	title: 'The Handmaid\'s Tale',
	spec1: 'Utopian and dystopian fiction, Science Fiction, Speculative fiction',
	description: "It is the world of the near future, and Offred is a Handmaid in the home of the Commander and his wife. She is allowed out once a day to the food market, she is not permitted to read, and she is hoping the Commander makes her pregnant, because she is only valued if her ovaries are viable. Offred can remember the years before, when she was an independent woman, had a job of her own, a husband and child. But all of that is gone now...everything has changed. ",
	model: 'Margaret Atwood',
	price: '80000'
}),
new Book({
	category: 'Book',
	imagePath: 'https://prodimage.images-bn.com/pimages/9781478923084_p0_v2_s192x300.jpg',
	title: 'Understanding Trump',
	spec1: 'Real',
	description: "The president owes his position to the people who believed in him as a candidate, not to the elites in government and media who have expressed contempt for him since he began his campaign to become president. The very essence of Trump's mission is a willingness to enact policies and set goals that send our country in a bold new direction - one that may be unreasonable to Washington but is sensible to millions of Americans outside the Beltway. Only with the country's help will President Trump be able to overcome the entrenched interests in Washington and fulfill his promise to make America great again for all Americans.",
	model: 'Newt Gingrich',
	price: '90000'
}),
new Book({
	category: 'Book 2',
	imagePath: 'https://prodimage.images-bn.com/pimages/9781478923084_p0_v2_s192x300.jpg',
	title: 'Lorem 1',
	spec1: 'Real',
	description: "lites in government and media who have expressed contempt for him since he began his campaign to become president. The very essence of Trump's mission is a willingness to enact policies and set goals that send our country in a bold new direction - one that may be unreasonable to Washington but is sensible to millions of Americans outside the Beltway. Only with the country's help will President Trump be able to overcome the entrenched interests in Washington and fulfill his promise to make America great again for all Americans.",
	model: 'Newt Gingrich',
	price: '90000'
})
];

// (new Promise(function(resolve){
// 	books.map(function(book){
// 		book.save((err, result) => {
// 			console.log(err, result);
// 		})
// 	});
// 	return resolve(true);
// })).then(function(){
// 		mongoose.disconnect();
// })

var done = 0;
books.map(book => {
	book.save((err, result) => {
		console.log("Done! " + (result?._id ?? "undefined"));
		done++;
		if(done == books.length){
			process.exit(1);
		}
	})
})