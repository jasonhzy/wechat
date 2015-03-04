SF.data = {

	title: '淘金豆',
	debug: false,
	pageBg: '#000',
	canvasBg: 'transparent',
	canvasFont: 'Monaco, monospace',
	canvasCursor: 'move',
	textCol: '#000',
    hasAudio: false,
    playAudio: true,

	w: 320,
	h: 480,
	resize: false,

	imgs: [
		'sprites.png', 'bg_0.jpg'
	],

	sfx: [
		'ping', 'burp', 'drop', 'extra_life', 'gulp', 'laugh'
	],

	player: {
		'w': 35,
		'h': 48,
		'col': '#2c0',
		'src': 'a/sprites.png',
		'anim': 'stand'
	},

	player_anims: {
		'stand': {
			xOff: 0,
			yOff: 0,
			frames: 0,
			currentFrame: 0,
			frameSpeed: 0
		},

		'left': {
			xOff: 140,
			yOff: 0,
			frames: 1,
			currentFrame: 0,
			frameSpeed: 3
		},

		'right': {
			xOff: 140,
			yOff: 48,
			frames: 1,
			currentFrame: 0,
			frameSpeed: 3
		},

		'jig': {
			xOff: 0,
			yOff: 0,
			frames: 3,
			currentFrame: 0,
			frameSpeed: 2
		},


		'drink': {
			xOff: 70,
			yOff: 48,
			frames: 1,
			currentFrame: 0,
			frameSpeed: 7,
			nextAnim: 'jig'
		},

		'pray': {
			xOff: 0,
			yOff: 48,
			frames: 0,
			currentFrame: 0,
			frameSpeed: 0
		}
	},


	cloud: {
		'src': 'a/sprites.png',
		'w': 40,
		'h': 45,
		'anim': false,
		'xOff': 0,
		'yOff': 124,
		'opacity': 1,
		'zoom': 1
	},
	doudou: {
		'src': 'a/sprites.png',
		'w': 188,
		'h': 80,
		'anim': 'still',
		'xOff': 257,
		'yOff': 204,
		'opacity': 1,
		'zoom': 1
	},
	cloud_anims: {

		'still': {
			xOff: 0,
			yOff: 127,
			frames: 0,
			currentFrame: 0,
			frameSpeed: 1
		},


		'drop': {
			xOff: 0,
			yOff: 127,
			frames: 1,
			currentFrame: 0,
			frameSpeed: 5,
			nextAnim: 'still'
		},


		'scowl': {
			xOff: 160,
			yOff: 127,
			frames: 0,
			currentFrame: 0,
			frameSpeed: 1
		},

		'grin': {
			xOff: 0,
			yOff: 127,
			frames: 4,
			currentFrame: 0,
			frameSpeed: 6,
			nextAnim: 'still'
		}

	},

	drink: {
		'src': 'a/sprites.png',
		w: 12,
		h: 12,
		anim: false
	},

	whiskeyCols:["#fce94f","#edd400","#c4a000"],
	playerCols:["#920","#c20","#600"]

};

