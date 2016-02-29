// Example file src/helpers/bold.js
module.exports = function(options) {
  // options.fn(this) = Handelbars content between {{#bold}} HERE {{/bold}}
  var str = options.fn(this);
  var res = str.split("@");
  //var service = '<p><a data-toggle="modal-' + res[1] + '">Click me for a modal</a></p><h3 class="sans uc baseline clearfix">' +
  var service = '	<span class="float-left">' + res[0] + '</span>' +
  				'	<span class="show-for-small-only1 float-right">' +
  				'		<img id="'+res[1]+'" src="/assets/img/' + res[1] + '.png" />' +
  				'	</span>' +
  				'</h3>';

  var serv2 =	'<div class="media-object">' +
  				'	<div class="media-object-section">' +
  				'		<h3 style="font-size:1rem;">' + res[0] + '</h3>' +
  				'	</div>' +
  				'	<div class="media-object-section">' +
  				'		<div class="thumbnail">' +
  				'			<img style="border:none;" id="'+res[1]+'" src="/assets/img/' + res[1] + '.png" />' +
  				'		</div>' +
  				'	</div>' +

  				'</div>';
			return serv2;

}