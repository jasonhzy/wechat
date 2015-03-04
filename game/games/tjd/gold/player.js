// player class
SF.Player = function(game, config) {

	SF.Sprite.call(this, game, config);

	this.x = this.game.w / 2 - (this.w / 2);
	this.y = this.game.h  - (this.h + this.game.ground);
	this.health = 100;


};
SF.Player.prototype = new SF.Sprite();
SF.Player.prototype.constructor = SF.Player;

SF.Player.prototype.move = function() {


	this.last_x = this.x;
	this.x = this.game.input.mx;

	if (this.anim === 'drink' || this.anim === 'jig') {
		// do nothin
	}
	// else if (this.x > (this.last_x + 1) && this.anim != 'left') {
	//    this.changeAnim('left');
	// }
	// else if (this.x < (this.last_x - 1) && this.anim != 'right') {
    //    this.changeAnim('right');
	// }
	else if (this.anim === 'jig') {
		// do nothing
	}
	else if (this.x == this.last_x && this.anim != 'stand') {
		this.changeAnim('stand');
	}

	if (this.x <= 0 ) {
		this.x = 0;
	}

	if (this.x >= this.game.w - this.w) {

		this.x = this.game.w - this.w;
	}


	this.draw();

};

