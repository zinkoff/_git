module.exports = function(options) {
	 var str = options.fn(this);
	 var res = str.split("@");
	 var tip = '<span data-tooltip aria-haspopup="true" class="has-tip top" data-disable-hover="false" tabindex=2 title="' + res[1] + '">' + res[0] + '</span>';
	 return tip;
}