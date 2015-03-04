SF.Draw = {

    game: null,

    init: function(game) {
        this.game = game;
    },


    clear: function(col) {

        this.game.ctx.clearRect(0,0,this.game.w, this.game.h);

    },

    rect: function(x, y, w, h, col) {

        try {
            this.game.ctx.fillStyle = col;
            this.game.ctx.fillRect(x,y,w,h);
        } catch(e) {
            this.game.console.log(e);
        }

    },


    outline: function(x,y,w,h,col) {

        try {
            this.game.ctx.lineWidth = 1;
            this.game.ctx.strokeStyle = col;
            this.game.ctx.strokeRect(x,y,w,h);
        } catch(e) {
            this.gameconsole.log(e);
        }

    },


    circle: function(x, y, r, col, stroke) {

        col = col || '#c20';

        try {
            this.game.ctx.fillStyle = col;
            this.game.ctx.beginPath();
            this.game.ctx.arc(~~x, ~~y, r, 0, Math.PI*2, true);
            this.game.ctx.closePath();
            this.game.ctx.fill();
        } catch(e) {
            this.gameconsole.log(e);
        }

        if (stroke) {
            this.game.ctx.lineWidth = stroke.width;
            this.game.ctx.strokeStyle = stroke.color;
            this.game.ctx.stroke();
        }

    },


    image: function(src, x, y, w, h, xOff, yOff, zoom) {
    },


    text: function(str, x, y, size, col, font) {

        size = size || 10;
        font = font || this.game.canvasFont;

        x = (x === 'center')
            ? ~~(this.game.w / 2) - ((str.length * size) / 2.75 )
            : x = x;

        y = (y === 'center')
            ? ~~(this.game.h / 2) - ((size) / 2)
            : y = y;

        col = col || this.game.textCol;


        try {
            this.game.ctx.font = 'bold '+size+'px '+font;
            this.game.ctx.fillStyle = col;
            this.game.ctx.fillText(str, x, y);
        } catch(e) {
            console.log(e);
        }

    },


    star: function(cx, cy, spikes, r0, r1, col) {

        var i = 0;

        spikes = spikes || 5;
        col = col || '#fff';
        r0 = r0 || 2;
        r1 = r1 || 4;
        var rot = Math.PI/2*3,x=cx,y=cy,step=Math.PI/spikes;

        this.game.ctx.fillStyle = col;
        this.game.ctx.beginPath();
        this.game.ctx.moveTo(cx,cy-r0);

        for(i=0;i<spikes;i++){
            x=cx+Math.cos(rot)*r0;
            y=cy+Math.sin(rot)*r0;
            this.game.ctx.lineTo(x,y);
            rot+=step;

            x=cx+Math.cos(rot)*r1;
            y=cy+Math.sin(rot)*r1;
            this.game.ctx.lineTo(x,y);
            rot+=step;
        }

        this.game.ctx.lineTo(cx,cy-r0);
        this.game.ctx.fill();
        this.game.ctx.closePath();
    
    },


    changeBg: function(num) {

        var col, newBg = 'none';

        switch (num) {
       
            case 0:
                col = '#063';
                newBg = 'url(a/bg_' + num + '.jpg)';
            break;

            case 1:
                // col = '#8bc';
                col = '#cef';
            break;

            default:
                col = '#333';
            break;
        
        }

        this.game.wrap.style.backgroundColor = col;
        this.game.wrap.style.backgroundImage = newBg;

    }

};

