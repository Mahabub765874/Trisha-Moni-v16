const fs = require("fs");
module.exports.config = {
	name: "pagolnki",
    version: "1.1.1",
prefix: true,
	permssion: 0,
	credits: "John Lester", 
	description: "Just Respond",
	category: "no prefix",
    cooldowns: 10, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😂")==0 || event.body.indexOf("🤣")==0 || event.body.indexOf("😹")==0 || event.body.indexOf("😆")==0) {
		var msg = {
				body: "-পাগল নাকি তুমি এভাবে কেউ হাসে-!!🙄",
				attachment: fs.createReadStream(__dirname + `/cache/scripts_commands_cache_pagolnaki.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
