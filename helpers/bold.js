module.exports = function(options) {
  // options.fn(this) = Handelbars content between {{#bold}} HERE {{/bold}}
  var bold = '<strong>' + options.fn(this) + '</strong>';
  return bold;
}