/**
 * Get the URL parameters
 * source: https://vanillajstoolkit.com/helpers/getparams/ on 2020-Mar-02 15:16:00 GMT+00
 * @param  {String} url The URL
 * @return {Object}     The URL parameters
 */
function getParams(url){
	var params = {};
	var parser = document.createElement('a');
	parser.href = url ? url : window.location.href;
	var query = parser.search.substring(1);
	var vars = query.split('&');
	if (vars.length < 1 || vars[0].length < 1) return params;
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split('=');
		params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
	}
	return params;
}
