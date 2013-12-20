var request = require('request');
var _ = require('underscore');
var qs = require('querystring');

var group_urlname = 'AngularJS-NYC';
var api_url = 'https://api.meetup.com';
var api_key = '41b4e757f4254625c6621e39135715';

var process_meetup_group = function (group) {

	var endpoint = '/2/events';

	var meetup_id;
	request.get(api_url + endpoint, {
		'qs': {
			'group_urlname': group_urlname,
			'key': api_key,
			'sign': true
		}, 
		'json': true
	}, function(err, resp, body) {
		_.each(body.results, function (meetup) {
			rsvp_to_event(meetup.id)
		})
	});
};

var rsvp_to_event = function (meetup_id) {
	console.log(meetup_id);
	var endpoint = '/2/rsvp';

	request.post(api_url + endpoint, {
		'form': {
			'event_id': meetup_id,
			'rsvp': 'yes',
			'key': api_key,
			'sign': true
		}
	}, function (err, resp, body) {
		console.log(body);
	});
};

process_meetup_group(group_urlname);