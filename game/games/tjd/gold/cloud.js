
SF.Cloud = function(game, config) {

	SF.Sprite.call(this, game, config);

	this.src = config.src || null;

	this.col = '#444';

	this.x = this.x = (this.game.w / 2) - (this.w / 2);
	this.y = 20;

	this.xDir = 1;
	this.yDir = 0;

	this.speed = 2;
	this.changeDir = 50;

};

SF.Cloud.prototype = new SF.Sprite();
SF.Cloud.prototype.constructor = SF.Cloud;


SF.Cloud.prototype.move = function() {

	this.x = ~~(this.x + (this.xDir * this.speed));

    if (this.x <= 0) {
        this.xDir = 1;
    }
    else if (this.x >= (this.game.w - this.w)) {
        this.xDir = -1;
    }


	this.draw();

	this.changeDir--;

	if (this.changeDir <= 0) {
		this.speed = ~~(Math.random() * 4) + this.game.level;
		this.xDir = this.xDir * -1;
		this.changeDir = ~~(Math.random() * (this.game.w - this.w) / 2);
	}

};


// SF.Cloud.prototype.draw = function() {
// 
//     this.game.draw.rect(this.x, this.y, this.w, this.h, 'black');
// 
// };


SF.Cloud.prototype.moveTo = function(x, y, speed) {

	speed = speed || this.speed;

	if (this.x < x) {
		this.x += (1 * speed);
	}
	else if (this.x > x) {
		this.x -= (1 * speed);
	}

	if (this.y < y) {
		this.y += (1 * speed);
	}
	else if (this.y > y) {
		this.y -= (1 * speed);
	}


};

