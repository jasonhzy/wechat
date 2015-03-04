SF.Gold = function() {
	SF.Game.call(this);
};

SF.Gold.prototype = new SF.Game();
SF.Gold.prototype.constructor = SF.Gold;

SF.Gold.prototype.postInit = function() {

	this.ground = 100;
	this.score = 0;
	this.hiScore = localStorage.whiskey_hiScore || 120;
	this.level = 1;
	this.drinks = [];
	this.explosions = [];
	this.sparkles = [];
	this.nextDrink = 20;
	this.totalDrinks = 20;

    this.textLayer = document.getElementById('textLayer');

	this.textOpacity = 0;

	this.splashImg = new Image();
	this.splashImg.src = "a/sprites.png";

	//this.logoImg = new Image();
	//this.logoImg.src = "a/logo.png";
	
	this.player = new SF.Player(this, SF.data.player);

	this.player.anims.stand = new SF.Animation(SF.data.player_anims.stand);
	this.player.anims.left = new SF.Animation(SF.data.player_anims.left);
	this.player.anims.right = new SF.Animation(SF.data.player_anims.right);
	this.player.anims.jig = new SF.Animation(SF.data.player_anims.jig);
	this.player.anims.drink = new SF.Animation(SF.data.player_anims.drink);
	this.player.anims.pray = new SF.Animation(SF.data.player_anims.pray);
	this.player.lives= 3;

	this.cloud = new SF.Cloud(this, SF.data.cloud);
	this.cloud.anims.still =  new SF.Animation(SF.data.cloud_anims.still);
	this.cloud.anims.drop =  new SF.Animation(SF.data.cloud_anims.drop);
	this.cloud.anims.grin =  new SF.Animation(SF.data.cloud_anims.grin);
	this.cloud.anims.scowl =  new SF.Animation(SF.data.cloud_anims.scowl);

    this.rainbow = {
        width: 10,
        x: 240,
        y: 410,
        r: 190,
        cols: ['#ad7fa8', '#729fcf', '#8ae234', '#fce94f', '#ef2929'],
        render: function() {
       
            var i = 0,
                len = this.cols.length;

            for (i = 0; i < len; i += 1) {
                SF.Draw.circle(this.x, this.y, 
                        this.r + (i * this.width), 
                        'transparent', 
                        {width: this.width, color: this.cols[i]});
            }

        }
    };

	this.audio.play('ping');
    this.draw.changeBg(0);

};


SF.Game.prototype.splash = function() {

	this.textOpacity = (this.textOpacity < 0) ? 1 : this.textOpacity-=0.015;

    this.draw.clear();

	try {

		this.ctx.drawImage(
			this.splashImg,
			0, 210,
			220,85,
			~~((this.w/2)-(220/2)),~~((this.h/2)-100),(220),(85)
		);
		
		this.ctx.drawImage(
			this.splashImg,
			250, 205,
			188,77,
			this.w / 2 - 90, (this.h / 2) + 90,188,77
		);

	} catch(e) {
		this.console.log(e);
	}


	this.draw.text("开始游戏",this.w / 2 - 30, (this.h / 2) + 30, 14, "rgba(255, 255, 255,"+this.textOpacity+")");
	

	
    // this.draw.text(this.ua.screenW+', '+this.ua.screenH,200, 10);
    // this.draw.text(this.ua.winW+', '+this.ua.winH,200, 25);


	if (this.input.mclick === true) {

		this.input.mclick = false;
		this.count = 0;
		this.draw.changeBg(1);
		this.state = "interMission";

        this.textLayer.style.display = 'none';

	}

};



SF.Gold.prototype.interMission = function() {

	this.textOpacity = (this.textOpacity < 0) ? 1 : this.textOpacity-=0.015;

    this.count += 1;
	this.draw.clear();
    this.drawBg();
	this.hud();
	this.moveExplosions();
	this.player.move();
	this.cloud.draw();

	if (this.count < 120) {

		this.draw.text("关卡 "+this.level, 
            92,
            (this.h/4) + 2,
            45, 
            "#FCAF3E", 'Irish Grover');
		this.draw.text("关卡 "+this.level, 
            90,
            (this.h/4),
            45, 
            "#CE5C00", 'Irish Grover');
        if (this.level === 1)
        {
            this.draw.text("接住所有掉落的金豆!", 40, (this.h/4)+50, 25, "rgba(0, 0, 0,"+this.textOpacity+")", "Irish Grover");
        }


	}
	else {

		this.totalDrinks = 20 + (this.level * 2);

		this.player.changeAnim('jig');
		this.count = 0;

		this.state = 'play';

	}

};


SF.Gold.prototype.play = function() {

	if (this.player.lives < 0) {
		this.cloud.changeAnim('scowl');
		this.player.changeAnim('pray');
		this.state = 'gameOver';
		this.audio.play("gulp");
        this.textLayer.style.display = 'block';
		return;
	}


	this.draw.clear();
    this.drawBg();
	this.hud();
	this.dropDrink();
	this.cloud.move();
	this.moveDrinks();
	this.moveExplosions();
	this.player.move();

	this.input.mclick = false;

	if (this.score % 210 === 0 && this.score > 0) {
		this.player.lives += 1;
		this.score += 3;
		this.audio.play('extra_life');
	}

	if ( this.totalDrinks <= 0 && this.drinks.length === 0 ) {

		this.audio.play("ping");
		this.level += 1;

		this.player.changeAnim("stand");
		// this.cloud.changeAnim("grin");
		this.state = "interMission";

	}

};



SF.Gold.prototype.moveDrinks = function() {

	// move drinks
	var remove = false,
        i;
	for (i = 0; i < this.drinks.length; i++) {
		remove = false;
		this.drinks[i].move();

		if (this.drinks[i].hitGround === false && 
                this.player.collide(this.drinks[i])) {
			this.drinks[i].xDir = this.drinks[i].xDir * -1;
			this.drinks[i].yDir = this.drinks[i].yDir * -1;
			this.score += 3;
            this.sparkles.push(new SF.Sparkle(this, this.drinks[i].x, this.drinks[i].y));

			this.player.changeAnim('drink');
			this.drinks[i].remove = true;

		}
		else if (this.drinks[i].y >= (this.h - this.drinks[i].h)) {
			this.player.lives -= 1;
            this.drinks[i].remove = true;

		}

		if (this.drinks[i].remove) {
			this.drinks.splice(i, 1);
		}

	}

};


SF.Gold.prototype.dropDrink = function() {

	if (this.totalDrinks <= 0) {
		return;
	}

	// next drink
	if (this.nextDrink <= 0) {
		var config = SF.data.drink;
		config.x = this.cloud.x + (this.cloud.w / 2);
		config.y = this.cloud.y;
		this.drinks.push( new SF.Drink(this, config) );
		// this.cloud.changeAnim('drop');
		this.totalDrinks--;
		this.nextDrink = ~~(Math.random()*30) + 5;
	}
	this.nextDrink--;

};


SF.Gold.prototype.moveExplosions = function() {

    var i;

	// move explosions
	for (i = 0; i < this.explosions.length; i += 1) {
		if (this.explosions[i].finished) {
			this.explosions.splice(i, 1);
		}
		else {
			this.explosions[i].move();
		}
	}

	for (i = 0; i < this.sparkles.length; i += 1) {
		if (this.sparkles[i].finished) {
			this.sparkles.splice(i, 1);
		}
		else {
			this.sparkles[i].move();
		}
	}

};


SF.Gold.prototype.gameOver = function() {

    this.draw.clear();
    this.drawBg();
	this.hud();

	this.textOpacity = (this.textOpacity < 0) ? 1 : this.textOpacity-=0.015;

		this.draw.text("Game Over",
            53,
            (this.h/4) + 2,
            45, 
            "#111", 'Irish Grover');
		this.draw.text("Game Over",
            53,
            (this.h/4),
            45, 
            "#444", 'Irish Grover');

	
    if (this.score > this.hiScore) {
        this.draw.text("刷新最高分数!", 76, (this.h/3)+21, 27, "rgba(0, 50, 0, "+this.textOpacity+")", "Irish Grover");
        this.draw.text("刷新最高分数!", 75, (this.h/3)+20, 27, "rgba(0, 100, 0, "+this.textOpacity+")", "Irish Grover");
    }else{
    	this.draw.text("淘到"+this.score+"克黄金!", 76, (this.h/3)+21, 27, "rgba(0, 50, 0, "+this.textOpacity+")", "Irish Grover");
    }


	this.cloud.draw();
	this.moveExplosions();
	this.player.draw();

	if (this.player.dead !== true) {
		this.cloud.moveTo(this.player.x, this.player.y, 2);
	}
	else {
		this.cloud.moveTo(this.w / 2, 20, 1);
	}

	if (this.cloud.collide(this.player)) {
		this.cloud.changeAnim('drop');
		this.audio.play('laugh');
		this.explosions.push( new SF.Explosion(this, this.player.x, this.player.y + 10, 10, 60, SF.data.playerCols) );
		this.player.dead = true;
		this.player.x = -100;
		//btGame.setShare({
		//	title: "我玩【淘金豆】淘到"+this.score+"克黄金，大妈快来豆豆游戏淘金豆吧！"
		//});
		//btGame.playScoreMsg("淘到"+this.score+"克金子，你淘金的本事胜过中国大妈，快去通知小伙伴吧！");
		dp_submitScore(this.score);
	}


	if (this.input.mclick && this.player.dead) {

        if (this.score > this.hiScore) {
           this.hiScore = this.score;
            localStorage.whiskey_hiScore = this.hiScore;
        }

		this.reset();

		this.state="splash";
        this.draw.changeBg(0);
		this.input.mclick=false;
	}

};


SF.Gold.prototype.reset = function() {

	this.score = 0;
	this.level = 1;
	this.drinks = [];
	this.explosions = [];
	this.nextDrink = 20;
	this.totalDrinks = 20;
	this.currentBg = 0;

	this.player.lives = 3;
	this.player.dead = false;
	this.player.x = ~~((this.w / 2) - (this.player.w / 2));
	this.player.changeAnim("stand");

	this.cloud.x = ~~((this.w / 2) - (this.cloud.w / 2));
	this.cloud.y = 20;
	this.cloud.changeAnim("still");
	this.cloud.speed = 2;


};

SF.Gold.prototype.hud = function() {

    var i;

    for (i = 0; i <  this.player.lives; i += 1 ) {
        this.draw.text('♥', 20 + (i * 15),20,20 ,'#900');
    }


	this.draw.text('分数: '+this.score, (this.w - 70), 20);
	this.draw.text('最高分: '+this.hiScore, 'center', 20);

};

SF.Gold.prototype.drawBg = function() {

    this.rainbow.render();

    this.draw.circle(100, 150, 20, '#fff');
    this.draw.circle(140, 150, 20, '#fff');
    this.draw.circle(120, 145, 25, '#fff');


    this.draw.circle(0, this.h - 50, 150, '#7ab');
    this.draw.circle(100, this.h - 50, 120, '#7ab');
    this.draw.circle(300, this.h - 50, 170, '#7ab');

    this.draw.rect(0, this.h - this.ground, this.w, this.h, '#040');
    this.draw.rect(0, this.h - this.ground + 10, this.w, this.h, '#200');


};

