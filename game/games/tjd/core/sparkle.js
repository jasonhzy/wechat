SF.Sparkle = function(game, x, y, r, num) {

    this.game = game;
    this.x = x;
    this.y = y;

    this.finished = false;

    this.num = num || 3;

    this.sparkles = [];

    for (i=0; i <= this.num; i++) {
        this.sparkles.push( new SF.StarSparkle(game, x,y, this.r) );
    }

};


SF.Sparkle.prototype.move = function() {

    var i, remove = [];

    if (!this.sparkles.length) {
        this.finished = true;
    }

     for (i = 0; i < this.sparkles.length; i += 1) {
        this.sparkles[i].move();

        if (this.sparkles[i].offScreen === true) {
            this.sparkles.splice(i, 1);
        }

    }


};


SF.StarSparkle = function(game,x,y,r) {


    this.game = game;

    this.x = x;
    this.y = y;
    this.r = r;

    this.offScreen = false;

    var dir = ~~(Math.random() * 2);
    dir = (dir) ? 1 : -1;

    this.vx = ~~(Math.random() * 2) * dir;
    this.vy = ~~(Math.random() * 5) * -1;
    this.opacity = 1;
    this.fade = 0.05;



};


SF.StarSparkle.prototype.move = function() {

    this.x += this.vx;
    this.y += this.vy;

    this.vx *= 0.99;
    this.vy *= 0.99;

    this.vy += 0.05;
    this.opacity -= this.fade;

    this.game.draw.star(this.x, this.y, 6, 1, 4, 'rgba(255, 215, 0, '+this.opacity+')');
    if (this.opacity <= 0) {
        this.offScreen = true;
    }

};

