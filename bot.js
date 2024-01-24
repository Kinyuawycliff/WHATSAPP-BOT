//import qrcode from'qrcode-terminal';
//import { Client } from 'whatsapp-web.js';

const { Client } = require('whatsapp-web.js');
const client = new Client();

const qrcode = require('qrcode-terminal');
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();

client.on('message', (message) => {
	console.log(message.body);
});
// Message to send
client.on('message', message => {
	if ((message.body).toLowerCase() === 'hello') {
		client.sendMessage(message.from, 'Hello how are you ? \n i\'m a bot assistant created by wickie,How can i help you ?')
    }else if ((message.body).toLowerCase() === 'What is your name ?') {
		client.sendMessage(message.from, 'I don\'t have a name am a Bot created by wickie');
	}else if ((message.body).toLowerCase() === 'am fine') {
		client.sendMessage(message.from, 'I\'m gland to here that,How can i help you ?');
	}else if ((message.body).toLowerCase() === 'okay') {
		client.sendMessage(message.from, 'Wickie is not available right-now he will get back to you soon.');
	} else if((message.body).toLowerCase() === ''){
		client.sendMessage(message.from, `Sorry I didn\'t understand \n How can I Help you ? `);
	}
});



