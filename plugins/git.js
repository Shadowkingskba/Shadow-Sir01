const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('gitlink');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.GL}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.ibb.co/dKrkLLY/Pics-Art-09-19-09-18-57.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.png, caption: 𝐒𝐇𝐀𝐃𝐎𝐖-𝐒𝐈𝐑𝟎𝟏*
 

        *Github link        _https://github.com/Shadowkingskba/Shadow-Sir01*
 

       *Audio commads-1     _https://github.com/Shadowkingskba/Shadow-Sir01/tree/master/upload_*
 
 
       *Audio commads-2     _https://github.com/Shadowkingskba/Shadow-Sir01/tree/master/uploads_*
  
  
      *Sticker commads      _https://github.com/Shadowkingskba/Shadow-Sir01/tree/master/stickers_*
`}) 

})); 
