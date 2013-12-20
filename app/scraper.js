var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var _ = require('underscore');
var archiver = require('./archiver');

var url = "http://news.ycombinator.com";
var url_pattern = new RegExp(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/);
request(url, function(err, resp, body) {
    if (err)
        throw err;
    $ = cheerio.load(body);
    var articles = $('.title a');
    var article,
        title,
        url;
    for (var i=0; i < articles.length - 1; i += 1) {
        article = articles[i];
        title = $(article).html();
        url = article.attribs.href;
        // if (url.search(url_pattern) !== -1) {
            archiver.archive_to_pocket(title, url);
        // }
    }
});