var sync = require('synchronize');
var request = require('request');
var _ = require('underscore');
var courses = require('../USCCourses.json');


// The API that returns the in-email representation.
module.exports = function(req, res) {
  var term = req.query.text.trim();
  handleSearchString(term, req, res);
};

function handleSearchString(term, req, res) {
  var response;
  var result;
    
  courses.forEach(function(course) {
    if( course.id == term ){
        result = course;
    }
          
  });
  
  var html = '<I>' + result.id + '</I> <B>' + result.name + '</B>';
  res.json({
    body: html
    // Add raw:true if you're returning content that you want the user to be able to edit
  });
}
