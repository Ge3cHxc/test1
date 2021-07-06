/* # Exclusively from danuma project 
# Do not use this fore any commercial thing
# If you abuse thais bot we wil kick you from bot 
# Do not edit (Respect to the Devaoloper) 
# All rights reserved ©Lasiya @lasiya99X t.me/lasiya99X
# Get more about devaoloper https://lasiya.ml
*/

const Asena = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const Config = require('../config');

const Language = require('../language');
const dd = "To make awesome logos"
const ddd = "MackingYour Beauifull Logos.."


if (Config.WORKTYPE == 'private') {
  if (Config.LANG == 'EN') {

    Asena.addCommand({pattern: 'editer', fromMe: true, desc: dd }, (async (message, match) => {    

                await message.sendMessage('╔════════════════════╗\n║  ✥▬ *❄️The Logo list❄️* ▬✥\n║\n║\n╠══ *.glow* ```your text```\n║\n╠══ *.nsky* ```your text```\n║\n╠══ *.b3d* ```your text```\n║\n╠══ *.beach* ```your text```\n║\n╠══ *.crash* ```your text```\n║\n╠══ *.ff* ```your text```\n║\n╠══ *.fire* ```your text```\n║\n╠══ *.glass* ```your text```\n║\n╠══ *.goldp* ```your text```\n║\n╠══ *.grass* ```your text```\n║\n╠══ *.matrix* ```your text```\n║\n╠══ *.phub* ```your text```\n║\n╠══ *.pro* ```your text```\n║\n╠══ *.silver* ```your text```\n║\n╠══ *.thunder* ```your text```\n║\n╠══ *.wolf* ```your text```\n║\n╠══ *.neon* ```your text```\n║\n╠══ *.sp* ```your text```\n║\n╠══ *.ttok* ```your text```\n║\n╠══ *.wtc* ```your text```\n║\n╠══ *.3d* ```your text```\n║\n╠══ *.game* ```your text```\n║\n╠══ *.logo* ```your text```\n║\n╚════════════════════╝');

    }));
  }
    if (Config.LANG == 'SI') {

    Asena.addCommand({pattern: 'editer', fromMe: true, desc: ddd }, (async (message, match) => {    

        await message.sendMessage('╔════════════════════╗\n║  ✥▬ *❄️The Logo list❄️* ▬✥\n║\n║\n╠══ *.glow* ```your text```\n║\n╠══ *.nsky* ```your text```\n║\n╠══ *.b3d* ```your text```\n║\n╠══ *.beach* ```your text```\n║\n╠══ *.crash* ```your text```\n║\n╠══ *.ff* ```your text```\n║\n╠══ *.fire* ```your text```\n║\n╠══ *.glass* ```your text```\n║\n╠══ *.goldp* ```your text```\n║\n╠══ *.grass* ```your text```\n║\n╠══ *.matrix* ```your text```\n║\n╠══ *.phub* ```your text```\n║\n╠══ *.pro* ```your text```\n║\n╠══ *.silver* ```your text```\n║\n╠══ *.thunder* ```your text```\n║\n╠══ *.wolf* ```your text```\n║\n╠══ *.neon* ```your text```\n║\n╠══ *.sp* ```your text```\n║\n╠══ *.ttok* ```your text```\n║\n╠══ *.wtc* ```your text```\n║\n╠══ *.3d* ```your text```\n║\n╠══ *.game* ```your text```\n║\n╠══ *.logo* ```your text```\n║\n╚════════════════════╝');

    }));
  }
}
else if (Config.WORKTYPE == 'public') {
  if (Config.LANG == 'EN') {

    Asena.addCommand({pattern: 'editer', fromMe: false, desc: dd}, (async (message, match) => {    

        await message.sendMessage('╔════════════════════╗\n║  ✥▬ *❄️The Logo list❄️* ▬✥\n║\n║\n╠══ *.glow* ```your text```\n║\n╠══ *.nsky* ```your text```\n║\n╠══ *.b3d* ```your text```\n║\n╠══ *.beach* ```your text```\n║\n╠══ *.crash* ```your text```\n║\n╠══ *.ff* ```your text```\n║\n╠══ *.fire* ```your text```\n║\n╠══ *.glass* ```your text```\n║\n╠══ *.goldp* ```your text```\n║\n╠══ *.grass* ```your text```\n║\n╠══ *.matrix* ```your text```\n║\n╠══ *.phub* ```your text```\n║\n╠══ *.pro* ```your text```\n║\n╠══ *.silver* ```your text```\n║\n╠══ *.thunder* ```your text```\n║\n╠══ *.wolf* ```your text```\n║\n╠══ *.neon* ```your text```\n║\n╠══ *.sp* ```your text```\n║\n╠══ *.ttok* ```your text```\n║\n╠══ *.wtc* ```your text```\n║\n╠══ *.3d* ```your text```\n║\n╠══ *.game* ```your text```\n║\n╠══ *.logo* ```your text```\n║\n╚════════════════════╝');

    }));
  }
    if (Config.LANG == 'SI') {

    Asena.addCommand({pattern: 'editer', fromMe: false, desc: ddd }, (async (message, match) => {    

        await message.sendMessage('╔════════════════════╗\n║  ✥▬ *❄️The Logo list❄️* ▬✥\n║\n║\n╠══ *.glow* ```your text```\n║\n╠══ *.nsky* ```your text```\n║\n╠══ *.b3d* ```your text```\n║\n╠══ *.beach* ```your text```\n║\n╠══ *.crash* ```your text```\n║\n╠══ *.ff* ```your text```\n║\n╠══ *.fire* ```your text```\n║\n╠══ *.glass* ```your text```\n║\n╠══ *.goldp* ```your text```\n║\n╠══ *.grass* ```your text```\n║\n╠══ *.matrix* ```your text```\n║\n╠══ *.phub* ```your text```\n║\n╠══ *.pro* ```your text```\n║\n╠══ *.silver* ```your text```\n║\n╠══ *.thunder* ```your text```\n║\n╠══ *.wolf* ```your text```\n║\n╠══ *.neon* ```your text```\n║\n╠══ *.sp* ```your text```\n║\n╠══ *.ttok* ```your text```\n║\n╠══ *.wtc* ```your text```\n║\n╠══ *.3d* ```your text```\n║\n╠══ *.game* ```your text```\n║\n╠══ *.logo* ```your text```\n║\n╚════════════════════╝');

    }));
  }
}


 
