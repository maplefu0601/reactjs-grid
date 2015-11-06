
var HJMessage = {

	send: function(message, data) {
		var customEvent = new CustomEvent(message, {detail:data});
		window.dispatchEvent(customEvent);
	},
};
