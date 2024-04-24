const fs = require("fs");
module.exports.config = {
	name: "valobashaoviram",
    version: "1.1.1",
prefix: true,
	permssion: 0,
	credits: "John Lester", 
	description: "Just Respond",
	category: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("♥️")==0 || event.body.indexOf("❤️")==0 || event.body.indexOf("🤍")==0 || event.body.indexOf("🖤")==0) {
		var msg = {
				body: "-ভালোবাসা অবিরাম কলিজা-!!😽",
				attachment: fs.createReadStream(__dirname + `/cache/valobashaoviram.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
