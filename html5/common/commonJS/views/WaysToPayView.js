View("WaysToPayView",{},function(){return{init:function(a){this._config=a;this._super();if(this._config.lineGame||!this._config.fixedLines)for(this._leftWaysPayImage=new View("waysToPayImage",78,472-98*this._config.currLine),this._leftWaysPayImage.setSize(55,121),this._rightWaysPayImage=new View("waysToPayImage",1148,472-98*this._config.currLine),this._rightWaysPayImage.setSize(55,121),this.addChildren(this._leftWaysPayImage,this._rightWaysPayImage),this._leftLines=[],this._rightLines=[],a=0;5>a;a++){var b=
new TextView("textField lines",this._config.lines[a],72,516-98*a),c=new TextView("textField lines",this._config.lines[a],1142,516-98*a);this._config.currLine==a&&(b.addClass("active"),c.addClass("active"));this._leftLines[a]=b;this._rightLines[a]=c;this.addChildren(b,c)}else this._fixedImage=[],this._fixedImage[0]=new View("waysToPayImage",72,232),this._fixedImage[1]=new View("waysToPayImage",1141,232),this.addChildren(this._fixedImage[0],this._fixedImage[1])},setLines:function(a){if(this._config.lineGame||
!this._config.fixedLines)this._leftWaysPayImage.setPosition(78,472-98*a),this._rightWaysPayImage.setPosition(1148,472-98*a),this._leftLines[this._config.currLine].removeClass("active"),this._rightLines[this._config.currLine].removeClass("active"),this._config.currLine=a,this._leftLines[this._config.currLine].addClass("active"),this._rightLines[this._config.currLine].addClass("active")},setFixedLines:function(){}}}());
