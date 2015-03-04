SF.Ua = {

    agent: navigator.userAgent.toLowerCase(),
    android: false,
    ipad: false,
    ipod: false,
    iphone: false,
    hasTouch: false,
    action: 'Click',
    detectOrientationChange: false,
    orientation: 'portrait',
    screenW: null,
    screenH: null,
    winW: null,
    winH: null,

    init: function() {

        this.screenW = window.screen.availWidth; 
        this.screenH = window.screen.availHeight; 

        this.winW = window.innerWidth;
        this.winH = window.innerHeight;


        // console.log(window.orientation);
        // var detectOrientationChangek = "onorientationchange" in window,
        //     orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

        // window.addEventListener(orientationEvent, function() {
        //     // alert('HOLY ROTATING SCREENS BATMAN:' + window.orientation + " " + screen.width);
        // }, false);

        this.android = (this.agent.indexOf('android') > -1) ? true : false;
        this.ipad = (this.agent.indexOf('ipad') > -1) ? true : false;
        this.ipod = (this.agent.indexOf('ipod') > -1) ? true : false;
        this.iphone = (this.agent.indexOf('iphone') > -1) ? true : false;

        this.hasTouch = this.android || this.ipad || this.ipod || this.iphone;
   
        if (this.hasTouch) {
            this.action = 'Tap';
        }

    }

};
