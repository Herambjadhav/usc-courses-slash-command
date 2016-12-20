var sync = require('synchronize');
var request = require('request');
var _ = require('underscore');
var courses = require('../USCCourses.json');


// The Type Ahead API.
module.exports = function(req, res) {
  
  var results = _.chain(courses)
  .map(function(course) {
      return {
        title : course.name,
        text : course.id
      };
    })
    .value();

  if (results.length === 0) {
    res.json([{
      title: '<i>(no results)</i>',
      text: ''
    }]);
  } else {
    res.json(results);
  }
};
