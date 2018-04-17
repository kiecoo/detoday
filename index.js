module.exports = makeGitterURL

function makeGitterURL (username) {
  return `https://gitter.im/${username}/~embed`
}

	        //difference from the repo of makeGitterChatbox https://github.com/kiecoo/makeGitterChatbox/blob/master/index.html
//		var x = makeGitterChatbox(exampleProfile)
//		document.body.appendChild(x)
