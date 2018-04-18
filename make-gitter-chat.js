var makeLinkUrl = require('./make-gitter-url.js')  

module.exports = makeGitterChat

 function makeGitterChat(username){
       return bel`
   
      <div class=${css.cardGitterChat} ><iframe class=${css.iframe} src=${ makeLinkUrl (username)}></iframe></div>
      `
 }
