SF.Drink = function(game, config) {

	SF.Sprite.call(this, game, config);

	this.src = config.src || null;

	this.col = '#369';

	this.x = config.x || 100;
	this.y = config.y || 20;


	this.vx = 0;
	this.vy = 0;
    this.elasticity = 0.2;

    this.hitGround = false;
    this.remove = false;
    this.ground = this.game.h - this.game.ground;

};

SF.Drink.prototype = new SF.Sprite();
SF.Drink.prototype.constructor = SF.Drink;


SF.Drink.prototype.move = function () {

	if (this.vx <= 0 || this.vx >= (this.game.w - this.w)) {
		this.vx *= -1;
	}

	this.x += this.vx;
	this.y += this.vy;

    this.vx *= 0.99;
    this.vy *= 0.99;
    this.vy += 0.10 + (this.game.level / 20);

    if (this.hitGround === false && this.y > this.ground) {
        this.game.audio.play('drop');
        this.hitGround = true;
        this.vy *= this.elasticity * -1;
    }

    if (this.y > this.game.h) {
        this.remove = true;
    }

	this.draw();

};


SF.Drink.prototype.draw = function() {

    this.game.draw.circle(this.x + (this.w / 2), 
                            this.y + (this.h / 2), 
                            this.w/2, '#edd400', {width: 3, color: '#a2941c'}); 

}
