request = require('request');

// var consumer_key = "";
// var access_token = "fb65a880-c5b9-86d1-62e3-73c210";


// 	var post_to_pocket = function (title, url) {
// 		// request.post(
// 		//     'http://www.yoursite.com/formpage',
// 		//     { form: { key: 'value' } },
// 		//     function (error, response, body) {
// 		//         if (!error && response.statusCode == 200) {
// 		//             console.log(body)
// 		//         }
// 		//     }
// 		// );
// 		console.log(title, url);
// 	}

exports.archive_to_pocket = function (title, url) {
	var consumer_key = "20113-10e005e7b194324e159e42ee";
	var access_token = "fb65a880-c5b9-86d1-62e3-73c210";
	var endpoint = "https://getpocket.com/v3/add";

	console.log(title, url);
	request.post({
		url: endpoint,
		form: {
			url: url,
			title: title,
			consumer_key: consumer_key,
			access_token: access_token
		}
	}, function(error, response, body){
		console.log(body);
	});
}