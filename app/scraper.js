var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var _ = require('underscore');

var url = "http://news.ycombinator.com";
var url_pattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
request(url, function(err, resp, body) {
    if (err)
        throw err;
    $ = cheerio.load(body);
    var articles = $('.title a');
    var data = []; // [{title:'', url:''}]
    _.each(articles, function (article) {
        if (article.attribs.href.search(url_pattern) >= 0) {
            data.push({
                'title': $(article).html(),
                'url': article.attribs.href
            });
        }
    });
    console.log(data);
});