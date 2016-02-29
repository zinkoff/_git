// Example file src/helpers/bold.js
module.exports = function(options) {
  // options.fn(this) = Handelbars content between {{#h2}} HERE {{/h2}}
  var bolder = '<h2 class="text-center"><span>' + options.fn(this) + '</span></h2>';
  return bolder;
}