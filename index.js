var jsonContent = require("./random.json");

/**
 * Generates Random Emojis Supported by Github
 * @param {void} 
 * @return {object} text, emoji
 */

function random() {
	var arr = [];

	for(var keys in jsonContent) {
		arr.push(keys);
	}	

	var n = Math.floor(Math.random() * arr.length);

	return {
		text: arr[n],
		emoji: jsonContent[arr[n]]
	};

}

module.exports = random;