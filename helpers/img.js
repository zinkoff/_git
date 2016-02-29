// {{#img}}[path to imagefile]@[id]@[billedtekst]@[antal graders rotation]@[small-px]@[medium-px]{{/img}}

module.exports = function(options) {
	// options.fn(this) = Handelbars content between {{#bold}} HERE {{/bold}}
	var str = options.fn(this);
	var res = str.split("@");
	//var service = '<p><a data-toggle="modal-' + res[1] + '">Click me for a modal</a></p><h3 class="sans uc baseline clearfix">' +
	var img = "";
	if (res[3] !== undefined) {

		img += '<style>#figure_' + res[1] + '{-ms-transform: rotate(' + res[3] + 'deg);-webkit-transform: rotate(' + res[3] + 'deg);transform: rotate(' + res[3] + 'deg);}';

		if (res[4] !== undefined) {
			img += '@media screen and (max-width: 20em) {#' + res[1] + '{width:' + res[4] + 'px;}}';
		}
		if (res[5] !== undefined) {
			img += '@media screen and (min-width: 20.001em) {#' + res[1] + '{width:' + res[5] + 'px;}}';
  		}


		img += '</style>';
		}
		img += '<figure id="figure_' + res[1] + '">';
		img += '<img id="' + res[1] + '" src="/assets/img/' + res[0] + '" alt="' + res[1] + '"/>';
		img += '	<figcaption>' + res[2] + '</figcaption></figure>';
		return img;

	}
