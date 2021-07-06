const Asena = require('../events');
const Config = require('../config');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const Language = require('../language');
const Lang = Language.getString('_asena');
const axios = require('axios');



Asena.addCommand({pattern: 'grp', fromMe: true, deleteCommand: false,}, (async (message, match) => {

        var respoimage = await axios.get(`https://telegra.ph/file/b79e8a1e8231dca8bfa69.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '*We Not Provide Our Groups Its Very Secrit*'})
    }));
  
if (Config.WORKTYPE == 'public') {
  
Asena.addCommand({pattern: 'grp', fromMe: false, deleteCommand: false,}, (async (message, match) => {

        var respoimage = await axios.get(`https://telegra.ph/file/b79e8a1e8231dca8bfa69.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '*We Not Provide Our Groups Its Very Secri* '})
    }));
}
