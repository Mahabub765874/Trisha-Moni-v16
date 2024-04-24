const fs = require("fs");
module.exports.config = {
	name: "dakoknogo.mp3",
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
	if (event.body.indexOf("🗣️")==0 || event.body.indexOf("🙋🏻‍♂️")==0 || event.body.indexOf("🙋🏻‍♀️")==0 || event.body.indexOf("🙋🏻")==0) {
		var msg = {
				body: "-ডাকো কেন গো-!!🙄",
				attachment: fs.createReadStream(__dirname + `/cache/dakoknogo.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
