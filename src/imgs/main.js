const anime = require('../../database/anime.json');

const animeRandom = () => {
	return {
		anime: () => anime[Math.floor(Math.random() * anime.length)]
	};
};

const random = {
	gato: function() {
		return console.log('un gato');
	},
	perro: function() {
		return console.log('un perro');
	};
};

module.exports = animeRandom();
module.exports.random = random;