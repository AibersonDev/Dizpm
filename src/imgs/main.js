const angry = require('../../imagenes/angry.json');
const blush = require('../../imagenes/blush.json');
const bored = require('../../imagenes/bored.json');
const confused = require('../../imagenes/confused.json');
const cry = require('../../imagenes/cry.json');
const dance = require('../../imagenes/dance.json');
const feed = require('../../imagenes/feed.json');
const greeting = require('../../imagenes/greeting.json');
const happy = require('../../imagenes/happy.json');
const hug = require('../../imagenes/hug.json');
const kill = require('../../imagenes/kill.json');
const kiss = require('../../imagenes/kiss.json');
const laugh = require('../../imagenes/laugh.json');
const pat = require('../../imagenes/pat.json');
const sad = require('../../imagenes/sad.json');
const slap = require('../../imagenes/slap.json');
const sleep = require('../../imagenes/sleep.json');
const smile = require('../../imagenes/smile.json');
const think = require('../../imagenes/think.json');


const sfw = {
	angry: function() {
		return angry[Math.floor(Math.random() * angry.length)]
	}
};

module.exports.sfw = sfw;