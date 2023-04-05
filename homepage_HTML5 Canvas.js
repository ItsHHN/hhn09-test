(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.bitmap1 = function() {
	this.initialize(img.bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,510);


(lib.bitmap20 = function() {
	this.initialize(img.bitmap20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,673,457);


(lib.bitmap23 = function() {
	this.initialize(img.bitmap23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,203,150);


(lib.bitmap26 = function() {
	this.initialize(img.bitmap26);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,175,212);


(lib.bitmap29 = function() {
	this.initialize(img.bitmap29);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,252,291);


(lib.bitmap32 = function() {
	this.initialize(img.bitmap32);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,346,282);


(lib.bitmap35 = function() {
	this.initialize(img.bitmap35);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,421,195);


(lib.bitmap37 = function() {
	this.initialize(img.bitmap37);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,122);


(lib.bitmap4 = function() {
	this.initialize(img.bitmap4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,775,516);


(lib.bitmap40 = function() {
	this.initialize(img.bitmap40);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,122);


(lib.bitmap9 = function() {
	this.initialize(img.bitmap9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,279,93);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol42 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AnjstIBog9IPOaZIhoA8g");
	var mask_graphics_1 = new cjs.Graphics().p("AoFsuIBog7IPOaXIhoA9g");
	var mask_graphics_2 = new cjs.Graphics().p("AobsuIBog7IPOaXIhnA9g");
	var mask_graphics_3 = new cjs.Graphics().p("AobstIBpg9IPOaZIhpA7g");
	var mask_graphics_4 = new cjs.Graphics().p("AoasuIBng8IPOaYIhnA9g");
	var mask_graphics_5 = new cjs.Graphics().p("AoasuIBng8IPPaZIhoA8g");
	var mask_graphics_6 = new cjs.Graphics().p("AobsuIBpg7IPNaXIhnA8g");
	var mask_graphics_7 = new cjs.Graphics().p("AoasuIBng7IPPaXIhpA9g");
	var mask_graphics_8 = new cjs.Graphics().p("AoastIBng9IPPaZIhpA7g");
	var mask_graphics_9 = new cjs.Graphics().p("AobsuIBog7IPOaXIhnA9g");
	var mask_graphics_10 = new cjs.Graphics().p("AobsuIBpg8IPOaYIhpA9g");
	var mask_graphics_11 = new cjs.Graphics().p("AoastIBng8IPOaYIhnA7g");
	var mask_graphics_12 = new cjs.Graphics().p("AoasuIBng8IPPaYIhoA9g");
	var mask_graphics_13 = new cjs.Graphics().p("AobstIBpg9IPNaZIhnA8g");
	var mask_graphics_14 = new cjs.Graphics().p("AoasuIBng7IPPaXIhpA8g");
	var mask_graphics_15 = new cjs.Graphics().p("AoasuIBng7IPPaXIhpA9g");
	var mask_graphics_16 = new cjs.Graphics().p("AobstIBog9IPOaZIhnA7g");
	var mask_graphics_17 = new cjs.Graphics().p("AobsuIBpg8IPOaYIhpA9g");
	var mask_graphics_18 = new cjs.Graphics().p("AohsuIBog8IPOaYIhoA9g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:59.475,y:-19.45}).wait(1).to({graphics:mask_graphics_1,x:56.125,y:-16.8}).wait(1).to({graphics:mask_graphics_2,x:51.65,y:-14.2}).wait(1).to({graphics:mask_graphics_3,x:44.95,y:-11.55}).wait(1).to({graphics:mask_graphics_4,x:38.25,y:-8.9}).wait(1).to({graphics:mask_graphics_5,x:31.6,y:-6.3}).wait(1).to({graphics:mask_graphics_6,x:24.9,y:-3.65}).wait(1).to({graphics:mask_graphics_7,x:18.2,y:-1.05}).wait(1).to({graphics:mask_graphics_8,x:11.55,y:1.6}).wait(1).to({graphics:mask_graphics_9,x:4.85,y:4.25}).wait(1).to({graphics:mask_graphics_10,x:-1.85,y:6.85}).wait(1).to({graphics:mask_graphics_11,x:-8.55,y:9.5}).wait(1).to({graphics:mask_graphics_12,x:-15.2,y:12.15}).wait(1).to({graphics:mask_graphics_13,x:-21.9,y:14.75}).wait(1).to({graphics:mask_graphics_14,x:-28.6,y:17.4}).wait(1).to({graphics:mask_graphics_15,x:-35.25,y:20}).wait(1).to({graphics:mask_graphics_16,x:-41.95,y:22.65}).wait(1).to({graphics:mask_graphics_17,x:-48.65,y:25.3}).wait(1).to({graphics:mask_graphics_18,x:-54.625,y:27.9}).wait(1).to({graphics:null,x:0,y:0}).wait(29));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.bitmap40, null, new cjs.Matrix2D(1,0,0,1,-75,-61)).s().p("ArtJiIAAzDIXbAAIAATDg");

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},19).wait(29));

	// Layer_3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_19 = new cjs.Graphics().p("ApDsuIBog7IPOaXIhoA8g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(19).to({graphics:mask_1_graphics_19,x:-57.975,y:30.55}).wait(29));

	// Layer_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.bitmap40, null, new cjs.Matrix2D(1,0,0,1,-75,-61)).s().p("ArtJiIAAzDIXbAAIAATDg");
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(19).to({_off:false},0).wait(29));

	// Layer_5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(img.bitmap37, null, new cjs.Matrix2D(1,0,0,1,-75,-61)).s().p("ArtJiIAAzDIXbAAIAATDg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(48));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-61,150,122);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.Symbol39 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AoasuIBng8IPOaYIhnA9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.9,-87.4,107.9,174.9);
p.frameBounds = [rect];


(lib.Symbol36 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.bitmap35, null, new cjs.Matrix2D(1,0,0,1,-210.5,-97.5)).s().p("Egg4APPIAA+dMBBxAAAIAAedg");
	this.shape.setTransform(210.5,97.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,421,195);
p.frameBounds = [rect];


(lib.Symbol33 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.bitmap32, null, new cjs.Matrix2D(1,0,0,1,-173,-141)).s().p("A7BWCMAAAgsDMA2DAAAMAAAAsDg");
	this.shape.setTransform(173,141);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,346,282);
p.frameBounds = [rect];


(lib.Symbol30 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.bitmap29, null, new cjs.Matrix2D(1,0,0,1,-126,-145.5)).s().p("AzrWvMAAAgtdMAnXAAAMAAAAtdg");
	this.shape.setTransform(126,145.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,252,291);
p.frameBounds = [rect];


(lib.Symbol27 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.bitmap26, null, new cjs.Matrix2D(1,0,0,1,-87.5,-106)).s().p("AtqQkMAAAghHIbVAAMAAAAhHg");
	this.shape.setTransform(87.5,106);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,175,212);
p.frameBounds = [rect];


(lib.Symbol24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.bitmap23, null, new cjs.Matrix2D(1,0,0,1,-101.5,-75)).s().p("Av2LuIAA3bIftAAIAAXbg");
	this.shape.setTransform(101.5,75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,203,150);
p.frameBounds = [rect];


(lib.Symbol22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg4AAXhMAAAgvBMBwBAAAMAAAAvBg");
	this.shape.setTransform(358.475,150.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,717,301);
p.frameBounds = [rect];


(lib.Symbol21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.bitmap20, null, new cjs.Matrix2D(1,0,0,1,-336.5,-228.5)).s().p("Eg0kAjtMAAAhHZMBpJAAAMAAABHZg");
	this.shape.setTransform(336.5,228.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,673,457);
p.frameBounds = [rect];


(lib.Symbol17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_139 = function() {
		/* gotoAndPlay(1);
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(139).call(this.frame_139).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A61316").s().p("AgaAzIgCgMIAHABQAFAAACgCIAEgDIAEgKIABgDIgchJIAOAAIAPArIAEAQIAGgQIAPgrIANAAIgcBLIgGAQQgEAGgEADQgEADgGAAIgIgBg");
	this.shape.setTransform(287.025,-6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A61316").s().p("AgbAhQgGgGAAgJQAAgGACgEQADgFAEgCQAEgCAFgCIALgBQAOgCAIgDIAAgDQAAgIgEgDQgFgEgJAAQgIAAgEADQgFADgCAIIgMgCQACgIAEgEQADgFAIgDQAHgDAJAAQAJAAAGADQAGACADADQACAEACAFIAAALIAAAQQAAASABAEQABAFACAEIgNAAQgCgEAAgFQgHAGgHACQgFADgIAAQgMAAgHgGgAgCAFQgIABgDABQgDACgCACQgCADAAADQAAAFAEAEQAEADAHAAQAHAAAFgDQAGgDACgGQADgEAAgIIAAgFQgHADgNACg");
	this.shape_1.setTransform(282.225,-8.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A61316").s().p("AgQAwQgHgGgEgJQgEgIAAgLQAAgMADgHQAFgKAGgFQAIgEAJgBQAGABAFADQAFADADAEIAAglIANAAIAABmIgMAAIAAgKQgGALgOAAQgIAAgIgEgAgMgHQgGAHAAAOQAAANAGAIQAGAHAHAAQAIAAAGgHQAGgHgBgNQABgPgGgHQgGgHgJAAQgHAAgFAHg");
	this.shape_2.setTransform(276.9,-9.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A61316").s().p("AgYAdQgKgKAAgTQAAgTAMgKQAKgJAMAAQAQAAAJAKQAKAKAAASQAAANgEAJQgFAIgIAEQgIAFgKAAQgOAAgKgKgAgOgUQgHAHAAANQAAAOAHAIQAGAHAIAAQAKAAAGgIQAGgHAAgOQAAgNgGgHQgGgHgKAAQgIAAgGAHg");
	this.shape_3.setTransform(272.025,-8.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A61316").s().p("AgBAxQgDgDgCgEQgCgDAAgLIAAgqIgJAAIAAgJIAJAAIAAgTIALgHIAAAaIAOAAIAAAJIgOAAIAAArQAAAFABABIADADIAEABIAGAAIABALIgJAAQgHAAgDgBg");
	this.shape_4.setTransform(269.05,-9.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A61316").s().p("AgBAxQgEgDgBgEQgCgDAAgLIAAgqIgJAAIAAgJIAJAAIAAgTIAMgHIAAAaIAMAAIAAAJIgMAAIAAArQAAAFAAABIACADIAFABIAFAAIACALIgKAAQgGAAgDgBg");
	this.shape_5.setTransform(266.85,-9.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A61316").s().p("AASAmIAAgsQgBgIgBgEQgCgDgDgDQgEgCgFAAQgHAAgFAFQgHAGAAAOIAAAnIgMAAIAAhJIALAAIAAAKQAJgMAOAAQAGAAAGACQAGADADAEQACAEABAFIABAMIAAAtg");
	this.shape_6.setTransform(263.65,-8.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A61316").s().p("AgXAdQgKgKAAgSQAAgSAKgKQAJgLAPAAQAOAAAKALQAJAKAAARIAAADIg2AAQABANAGAGQAGAHAIAAQAHAAAFgEQAFgEADgIIANACQgDALgIAHQgJAGgNAAQgPAAgJgKgAgNgVQgGAFAAAKIAoAAQgBgJgEgFQgGgHgJAAQgIAAgGAGg");
	this.shape_7.setTransform(258.525,-8.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A61316").s().p("AAmAmIAAguQAAgHgCgEQgBgDgDgCQgDgCgFAAQgHAAgGAGQgFAEAAAMIAAAqIgLAAIAAgvQAAgJgDgDQgDgFgHAAQgGAAgEADQgFACgCAGQgCAFAAAKIAAAmIgMAAIAAhJIALAAIAAAKQADgFAGgEQAGgDAHAAQAJAAAFADQAEAEACAGQAJgNAOAAQALAAAGAHQAGAFAAANIAAAyg");
	this.shape_8.setTransform(251.575,-8.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A61316").s().p("AgXAdQgKgKAAgSQAAgSAKgKQAJgLAPAAQAOAAAKALQAJAKAAARIAAADIg2AAQABANAGAGQAGAHAIAAQAHAAAFgEQAFgEADgIIANACQgDALgIAHQgJAGgNAAQgPAAgJgKgAgNgVQgGAFAAAKIAoAAQgBgJgEgFQgGgHgJAAQgIAAgGAGg");
	this.shape_9.setTransform(244.425,-8.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A61316").s().p("AgUAhQgIgGgCgMIANgCQABAIAEAEQAFAEAIAAQAIAAAFgEQAEgDAAgFQAAgEgEgDQgCgCgLgCQgNgEgFgCQgFgCgDgEQgDgFAAgFQAAgFADgEQACgFAEgCQADgDAFgBQAFgCAGAAQAHAAAHADQAGACAEAFQADAEABAHIgMACQgBgGgEgDQgEgDgHAAQgIAAgEADQgEACAAAEQAAABAAAAQAAABABABQAAAAAAABQAAAAABABQABACAEABIAKADQANAEAFACQAGABADAFQADAEAAAGQAAAHgEAFQgEAGgHADQgGADgJAAQgOAAgHgGg");
	this.shape_10.setTransform(239.725,-8.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A61316").s().p("AgQAjQgGgCgCgEQgDgEgBgFIgBgMIAAgtIAMAAIAAAoQAAAKABADQABAFAEADQAEADAGAAQAEAAAFgDQAFgDACgFQACgFAAgJIAAgnIANAAIAABJIgLAAIAAgLQgJANgOAAQgGAAgGgDg");
	this.shape_11.setTransform(235.025,-8.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A61316").s().p("AAmAmIAAguQAAgHgCgEQgBgDgDgCQgDgCgFAAQgHAAgGAGQgFAEAAAMIAAAqIgLAAIAAgvQAAgJgDgDQgDgFgHAAQgGAAgEADQgFACgCAGQgCAFAAAKIAAAmIgMAAIAAhJIALAAIAAAKQADgFAGgEQAGgDAHAAQAJAAAFADQAEAEACAGQAJgNAOAAQALAAAGAHQAGAFAAANIAAAyg");
	this.shape_12.setTransform(228.075,-8.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A61316").s().p("AAgAzIgMgfIgpAAIgMAfIgOAAIAnhlIAOAAIAqBlgAgGgUIgLAdIAhAAIgKgbIgHgVIgFATg");
	this.shape_13.setTransform(220.175,-9.725);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A61316").s().p("AgnAFIAAgJIBPAAIAAAJg");
	this.shape_14.setTransform(213.95,-8.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgoBMIgCgSQAGACAFAAQAGAAAEgDQADgCADgDIAFgOIACgFIgqhuIAVAAIAXBAIAGAZQADgMAFgNIAYhAIATAAIgrBwIgJAZQgFAKgGAEQgHAEgJAAQgGAAgGgCg");
	this.shape_15.setTransform(207.35,-7.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgdA5IAAhuIARAAIAAAQQAGgLAGgEQAEgEAHAAQAJAAAKAGIgGASQgHgFgHAAQgGAAgEAEQgFAEgCAHQgDAKAAAMIAAA5g");
	this.shape_16.setTransform(202.925,-10.275);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgCBIQgGgDgCgFQgCgFAAgRIAAg/IgOAAIAAgPIAOAAIAAgcIASgLIAAAnIATAAIAAAPIgTAAIAABAQAAAIABACIACAEQADABAEAAIAJgBIACARIgOACQgKAAgFgEg");
	this.shape_17.setTransform(199.4,-12.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAaA5IAAhDQAAgLgCgGQgCgGgGgDQgFgEgIAAQgLAAgIAIQgJAIAAAVIAAA8IgTAAIAAhuIARAAIAAAPQAMgSAWAAQAKAAAJAEQAIADAEAGQAFAGABAIIABASIAABEg");
	this.shape_18.setTransform(194.075,-10.275);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgYA1QgJgEgEgFQgEgGgCgIQgBgGAAgMIAAhEIATAAIAAA9IABAUQACAHAGAEQAFAFAJAAQAHAAAIgFQAHgEADgIQADgHAAgOIAAg7IATAAIAABuIgRAAIAAgQQgNATgVAAQgKAAgIgEg");
	this.shape_19.setTransform(185.875,-10.025);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AglArQgOgPAAgcQAAgeARgPQAOgMAUAAQAXAAAPAPQAOAPAAAbQAAAUgGAMQgHAMgMAHQgMAHgPAAQgWAAgPgPgAgWgfQgKAKAAAVQAAAWAKAKQAJALANgBQAOABAJgLQAKgLAAgVQAAgVgKgKQgJgLgOAAQgNAAgJALg");
	this.shape_20.setTransform(177.775,-10.15);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AghArQgOgPgBgbQAAgSAHgNQAFgNANgIQAMgGANAAQASAAALAJQAMAJAEARIgTADQgCgLgHgGQgHgFgJgBQgNAAgKAKQgIALAAAVQAAAWAIAKQAJAKANAAQALAAAIgGQAGgHADgOIATACQgEAUgMAKQgNALgSAAQgWAAgNgPg");
	this.shape_21.setTransform(170.55,-10.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgkArQgOgPAAgbQAAgbAOgQQAPgPAWAAQAWAAAOAPQAOAPAAAbIAAAEIhSAAQABATAJAKQAKAKANgBQAKABAHgGQAIgFAEgMIAUACQgFARgNAJQgMAKgTAAQgYAAgOgPgAgUghQgJAJgBAOIA9AAQgBgOgGgHQgJgLgOAAQgMABgJAIg");
	this.shape_22.setTransform(160.425,-10.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAbBNIAAhHQAAgNgGgGQgHgHgLAAQgHAAgIAFQgHAEgDAHQgDAHAAANIAAA9IgTAAIAAiZIATAAIAAA3QANgPATAAQAMAAAKAFQAJAFAEAIQADAJAAAPIAABHg");
	this.shape_23.setTransform(152.275,-12.275);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgCBIQgGgDgCgFQgCgFgBgRIAAg/IgNAAIAAgPIANAAIAAgcIASgLIAAAnIATAAIAAAPIgTAAIAABAQAAAIABACIAEAEQACABAEAAIAIgBIADARIgOACQgLAAgEgEg");
	this.shape_24.setTransform(147.25,-12.025);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAaA5IAAhDQAAgLgCgGQgCgGgGgDQgFgEgIAAQgLAAgIAIQgJAIAAAVIAAA8IgTAAIAAhuIARAAIAAAPQAMgSAWAAQAKAAAJAEQAIADAEAGQAFAGABAIIABASIAABEg");
	this.shape_25.setTransform(139.725,-10.275);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgJBNIAAhuIASAAIAABugAgJg2IAAgWIASAAIAAAWg");
	this.shape_26.setTransform(135.15,-12.275);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgCBIQgGgDgCgFQgCgFgBgRIAAg/IgNAAIAAgPIANAAIAAgcIASgLIAAAnIATAAIAAAPIgTAAIAABAQAAAIABACIAEAEQACABAEAAIAIgBIADARIgOACQgLAAgEgEg");
	this.shape_27.setTransform(131.5,-12.025);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAaA5IAAhDQAAgLgCgGQgCgGgGgDQgFgEgIAAQgLAAgIAIQgJAIAAAVIAAA8IgTAAIAAhuIARAAIAAAPQAMgSAWAAQAKAAAJAEQAIADAEAGQAFAGABAIIABASIAABEg");
	this.shape_28.setTransform(126.175,-10.275);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgkArQgOgPAAgbQAAgbAOgQQAPgPAWAAQAWAAAOAPQAOAPAAAbIAAAEIhSAAQABATAJAKQAKAKANgBQAKABAHgGQAIgFAEgMIAUACQgFARgNAJQgMAKgTAAQgYAAgOgPgAgUghQgJAJgBAOIA9AAQgBgOgGgHQgJgLgOAAQgMABgJAIg");
	this.shape_29.setTransform(118.025,-10.15);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgHA4IgrhuIAUAAIAYBBIAGAWIAHgVIAZhCIATAAIgqBug");
	this.shape_30.setTransform(110.45,-10.15);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgkArQgOgPAAgbQAAgbAOgQQAPgPAWAAQAWAAAOAPQAOAPAAAbIAAAEIhSAAQABATAJAKQAKAKANgBQAKABAHgGQAIgFAEgMIAUACQgFARgNAJQgMAKgTAAQgYAAgOgPgAgUghQgJAJgBAOIA9AAQgBgOgGgHQgJgLgOAAQgMABgJAIg");
	this.shape_31.setTransform(102.875,-10.15);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAaA5IAAhDQAAgLgCgGQgCgGgGgDQgFgEgIAAQgLAAgIAIQgJAIAAAVIAAA8IgTAAIAAhuIARAAIAAAPQAMgSAWAAQAKAAAJAEQAIADAEAGQAFAGABAIIABASIAABEg");
	this.shape_32.setTransform(92.525,-10.275);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgkArQgOgPAAgbQAAgbAOgQQAPgPAWAAQAWAAAOAPQAOAPAAAbIAAAEIhSAAQABATAJAKQAKAKANgBQAKABAHgGQAIgFAEgMIAUACQgFARgNAJQgMAKgTAAQgYAAgOgPgAgUghQgJAJgBAOIA9AAQgBgOgGgHQgJgLgOAAQgMABgJAIg");
	this.shape_33.setTransform(84.375,-10.15);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgkArQgOgPAAgbQAAgbAOgQQAPgPAWAAQAWAAAOAPQAOAPAAAbIAAAEIhSAAQABATAJAKQAKAKANgBQAKABAHgGQAIgFAEgMIAUACQgFARgNAJQgMAKgTAAQgYAAgOgPgAgUghQgJAJgBAOIA9AAQgBgOgGgHQgJgLgOAAQgMABgJAIg");
	this.shape_34.setTransform(76.225,-10.15);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAWA4IgShCIgEgTIgVBVIgUAAIgihuIATAAIASA/IAHAXIAFgWIAShAIASAAIARA/IAGAVIAGgVIATg/IASAAIgiBug");
	this.shape_35.setTransform(66.225,-10.15);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AglArQgOgPAAgcQAAgeARgPQAOgMAUAAQAXAAAPAPQAOAPAAAbQAAAUgGAMQgHAMgMAHQgMAHgPAAQgWAAgPgPgAgWgfQgKAKAAAVQAAAWAKAKQAJALANgBQAOABAJgLQAKgLAAgVQAAgVgKgKQgJgLgOAAQgNAAgJALg");
	this.shape_36.setTransform(56.325,-10.15);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgIBNIAAiZIARAAIAACZg");
	this.shape_37.setTransform(51.7,-12.275);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgIBNIAAiZIASAAIAACZg");
	this.shape_38.setTransform(50.7,-12.275);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgoAxQgKgJAAgOQAAgIADgHQAEgHAGgDQAGgEAIgCIAQgCQAWgDALgEIAAgFQABgLgGgFQgHgGgOgBQgNABgGAEQgHAEgCAMIgTgCQADgMAGgHQAFgHALgEQALgEANAAQAOAAAJADQAJADAFAGQADAEACAIIABASIAAAYQAAAaABAHQACAHADAHIgTAAQgDgHgCgHQgKAIgKAFQgIADgLAAQgTAAgJgJgAgDAHQgMACgFACQgFABgDAFQgCADAAAGQAAAHAFAFQAHAFAKAAQAKAAAIgFQAJgEAEgIQADgHAAgNIAAgGQgKAEgTADg");
	this.shape_39.setTransform(46.15,-10.15);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAbBNIAAhHQAAgNgGgGQgHgHgLAAQgHAAgIAFQgHAEgDAHQgDAHAAANIAAA9IgTAAIAAiZIATAAIAAA3QANgPATAAQAMAAAKAFQAJAFAEAIQADAJAAAPIAABHg");
	this.shape_40.setTransform(38.025,-12.275);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgCBIQgGgDgCgFQgCgFgBgRIAAg/IgNAAIAAgPIANAAIAAgcIASgLIAAAnIATAAIAAAPIgTAAIAABAQAAAIABACIAEAEQACABAEAAIAIgBIADARIgOACQgLAAgEgEg");
	this.shape_41.setTransform(30.8,-12.025);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgfAxQgLgJgDgSIASgCQACAKAHAHQAHAFAMAAQANAAAHgEQAGgGAAgHQAAgGgGgEQgEgDgPgDQgUgGgIgDQgIgEgEgGQgEgHAAgIQAAgIADgGQAEgHAGgEQAEgDAIgCQAHgCAJAAQAMAAAKAEQAKAEAFAGQAEAGACALIgSACQgCgIgGgFQgGgEgKgBQgNAAgFAEQgGAFAAAGQAAAEADACQACADAFACIAPAFQAUAFAIAEQAIACAFAGQAEAHAAAKQAAAJgFAIQgGAJgKAFQgLAEgNAAQgUAAgMgJg");
	this.shape_42.setTransform(25.975,-10.15);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgkArQgOgPAAgbQAAgbAOgQQAPgPAWAAQAWAAAOAPQAOAPAAAbIAAAEIhSAAQABATAJAKQAKAKANgBQAKABAHgGQAIgFAEgMIAUACQgFARgNAJQgMAKgTAAQgYAAgOgPgAgUghQgJAJgBAOIA9AAQgBgOgGgHQgJgLgOAAQgMABgJAIg");
	this.shape_43.setTransform(18.475,-10.15);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("Ag5BNIAAiZIA5AAQARAAALAFQALAFAFAJQAHAKgBAKQABAKgGAJQgFAJgLAFQAOAEAHAJQAIAKAAANQAAALgFAJQgEAKgHAFQgGAFgLACQgKADgOAAgAglA7IAmAAIAOgBQAHgBAEgDQAFgDADgGQADgFAAgIQAAgIgFgHQgEgGgHgDQgJgCgNAAIgkAAgAglgLIAiAAQAMAAAGgCQAIgCAEgGQADgFABgIQgBgIgDgGQgDgFgIgCQgGgDgQAAIgfAAg");
	this.shape_44.setTransform(9.35,-12.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},69).wait(71));

	// Layer_3
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#A61316").s().p("AgPAwQgIgGgEgJQgEgIAAgLQAAgMADgHQAFgKAHgFQAHgEAJgBQAGABAFADQAFADAEAEIAAglIAMAAIAABmIgLAAIAAgKQgIALgNAAQgIAAgHgEgAgMgHQgGAHAAAOQAAANAGAIQAGAHAHAAQAIAAAGgHQAFgHABgNQgBgPgFgHQgGgHgIAAQgIAAgFAHg");
	this.shape_45.setTransform(230.4,-9.65);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#A61316").s().p("AgFAzIAAhlIALAAIAABlg");
	this.shape_46.setTransform(228.225,-9.725);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#A61316").s().p("AgTAmIAAhJIALAAIAAALQAFgIADgDQADgCAEAAQAHAAAGAEIgEAMQgFgDgEAAQgEAAgDADQgDACgCAEQgCAHAAAIIAAAmg");
	this.shape_47.setTransform(228.55,-8.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#A61316").s().p("AgYAdQgKgKAAgTQAAgTAMgKQAKgJAMAAQAQAAAJAKQAKAKAAASQAAANgEAJQgFAIgIAEQgIAFgKAAQgOAAgKgKgAgOgUQgHAHAAANQAAAOAHAIQAGAHAIAAQAKAAAGgIQAGgHAAgOQAAgNgGgHQgGgHgKAAQgIAAgGAHg");
	this.shape_48.setTransform(225.225,-8.325);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#A61316").s().p("AAPAlIgMgsIgDgMIgOA4IgNAAIgXhJIANAAIAMAqIAEAQIAEgQIAMgqIAMAAIALAqIAEAOIAEgOIANgqIAMAAIgXBJg");
	this.shape_49.setTransform(219.725,-8.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#A61316").s().p("AgBAxQgEgDgBgEQgCgDAAgLIAAgqIgJAAIAAgJIAJAAIAAgTIAMgHIAAAaIAMAAIAAAJIgMAAIAAArQAAAFABABIABADIAFABIAFAAIACALIgKAAQgGAAgDgBg");
	this.shape_50.setTransform(216.35,-9.55);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#A61316").s().p("AASAmIAAgsQAAgIgCgEQgBgDgEgDQgEgCgFAAQgHAAgGAFQgFAGAAAOIAAAnIgNAAIAAhJIALAAIAAAKQAJgMAOAAQAHAAAFACQAGADADAEQADAEAAAFIABAMIAAAtg");
	this.shape_51.setTransform(213.95,-8.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#A61316").s().p("AgQAjQgGgCgCgEQgDgEgBgFIgBgMIAAgtIAMAAIAAAoQAAAKABADQABAFAEADQAEADAGAAQAEAAAFgDQAFgDACgFQACgFAAgJIAAgnIANAAIAABJIgLAAIAAgLQgJANgOAAQgGAAgGgDg");
	this.shape_52.setTransform(209.625,-8.225);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#A61316").s().p("AgbAhQgGgGAAgJQAAgGACgEQADgFAEgCQAEgCAFgCIALgBQAOgCAIgDIAAgDQAAgIgEgDQgFgEgJAAQgIAAgEADQgFADgCAIIgMgCQACgIAEgEQADgFAIgDQAHgDAJAAQAJAAAGADQAGACADADQACAEACAFIAAALIAAAQQAAASABAEQABAFACAEIgNAAQgCgEAAgFQgHAGgHACQgFADgIAAQgMAAgHgGgAgCAFQgIABgDABQgDACgCACQgCADAAADQAAAFAEAEQAEADAHAAQAHAAAFgDQAGgDACgGQADgEAAgIIAAgFQgHADgNACg");
	this.shape_53.setTransform(205.325,-8.325);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#A61316").s().p("AAbAzIAAgwIg1AAIAAAwIgNAAIAAhlIANAAIAAAqIA1AAIAAgqIANAAIAABlg");
	this.shape_54.setTransform(199.85,-9.725);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#A61316").s().p("AgnAFIAAgJIBPAAIAAAJg");
	this.shape_55.setTransform(194.05,-8.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgKBNIAAgWIAVAAIAAAWgAgFAnIgGhRIAAgiIAXAAIAAAiIgGBRg");
	this.shape_56.setTransform(192.375,-12.275);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AghBEQgMgKgCgSIASgBQACAMAHAGQAHAGAKAAQAIAAAGgEQAHgEAEgHQAEgGADgMQACgLABgMIAAgEQgGAJgKAGQgKAGgKAAQgTAAgOgOQgNgNABgXQAAgXANgOQAOgOAUAAQAOAAANAIQAMAIAHAPQAGAPAAAcQAAAcgGASQgHARgMAJQgNAJgPAAQgSAAgMgKgAgVg0QgJALAAAQQAAAPAJAJQAJAIAMAAQANAAAIgIQAJgJAAgRQAAgQgJgJQgJgKgMAAQgMAAgJAKg");
	this.shape_57.setTransform(188.9,-12.175);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgiA+QgPgTAAgrQAAgaAGgRQAFgQALgJQALgJAQAAQAMAAAJAFQAKAFAGAJQAGAJAEAOQADANAAAWQAAAbgFARQgGAQgLAJQgLAJgRAAQgVAAgNgQgAgUgzQgKAOAAAlQAAAmAJAMQAJANAMAAQANAAAJgNQAIgMAAgmQAAglgIgMQgJgNgNAAQgMAAgIALg");
	this.shape_58.setTransform(182.45,-12.175);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgiA+QgPgTAAgrQAAgaAGgRQAFgQALgJQALgJAQAAQAMAAAJAFQAKAFAGAJQAGAJAEAOQADANAAAWQAAAbgFARQgGAQgLAJQgLAJgRAAQgVAAgNgQgAgUgzQgKAOAAAlQAAAmAJAMQAJANAMAAQANAAAJgNQAIgMAAgmQAAglgIgMQgJgNgNAAQgMAAgIALg");
	this.shape_59.setTransform(176.05,-12.175);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgyBNQAAgHACgGQAEgLAJgJQAIgKARgOQAYgUAIgLQAJgNAAgKQAAgLgIgIQgIgHgNgBQgMAAgJAJQgIAIAAAOIgTgCQACgWANgLQANgLAVAAQAWAAANAMQANANAAARQAAAJgEAJQgEAJgJAJQgJAKgUARIgVATIgIALIBLAAIAAASg");
	this.shape_60.setTransform(169.475,-12.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgdA5IAAhuIARAAIAAAQQAGgLAGgEQAEgEAHAAQAJAAAKAGIgGASQgHgFgHAAQgGAAgEAEQgFAEgCAHQgDAKAAAMIAAA5g");
	this.shape_61.setTransform(166.075,-10.275);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AglArQgOgPAAgcQAAgeARgPQAOgMAUAAQAXAAAPAPQAOAPAAAbQAAAUgGAMQgHAMgMAHQgMAHgPAAQgWAAgPgPgAgWgfQgKAKAAAVQAAAWAKAKQAJALANgBQAOABAJgLQAKgLAAgVQAAgVgKgKQgJgLgOAAQgNAAgJALg");
	this.shape_62.setTransform(161.175,-10.15);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgPBOIAAhfIgRAAIAAgPIARAAIAAgMQAAgMACgEQADgIAHgEQAFgFANAAIARABIgDARIgKgBQgJAAgDAEQgEADAAALIAAAKIAWAAIAAAPIgWAAIAABfg");
	this.shape_63.setTransform(158.25,-12.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgCBIQgGgDgCgFQgDgFAAgRIAAg/IgNAAIAAgPIANAAIAAgcIATgLIAAAnIATAAIAAAPIgTAAIAABAQAAAIABACIACAEQADABAEAAIAJgBIACARIgOACQgKAAgFgEg");
	this.shape_64.setTransform(157,-12.025);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AAaA5IAAhDQAAgLgCgGQgCgGgGgDQgFgEgIAAQgLAAgIAIQgJAIAAAVIAAA8IgTAAIAAhuIARAAIAAAPQAMgSAWAAQAKAAAJAEQAIADAEAGQAFAGABAIIABASIAABEg");
	this.shape_65.setTransform(153.425,-10.275);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgkArQgOgPAAgbQAAgbAOgQQAPgPAWAAQAWAAAOAPQAOAPAAAbIAAAEIhSAAQABATAJAKQAKAKANgBQAKABAHgGQAIgFAEgMIAUACQgFARgNAJQgMAKgTAAQgYAAgOgPgAgUghQgJAJgBAOIA9AAQgBgOgGgHQgJgLgOAAQgMABgJAIg");
	this.shape_66.setTransform(147.025,-10.15);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgIA4IgqhuIAUAAIAYBBIAGAWIAHgVIAZhCIATAAIgqBug");
	this.shape_67.setTransform(141.2,-10.15);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgkArQgOgPAAgbQAAgbAOgQQAPgPAWAAQAWAAAOAPQAOAPAAAbIAAAEIhSAAQABATAJAKQAKAKANgBQAKABAHgGQAIgFAEgMIAUACQgFARgNAJQgMAKgTAAQgYAAgOgPgAgUghQgJAJgBAOIA9AAQgBgOgGgHQgJgLgOAAQgMABgJAIg");
	this.shape_68.setTransform(135.375,-10.15);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AAaA5IAAhDQAAgLgCgGQgCgGgGgDQgFgEgIAAQgLAAgIAIQgJAIAAAVIAAA8IgTAAIAAhuIARAAIAAAPQAMgSAWAAQAKAAAJAEQAIADAEAGQAFAGABAIIABASIAABEg");
	this.shape_69.setTransform(128.525,-10.275);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgkArQgOgPAAgbQAAgbAOgQQAPgPAWAAQAWAAAOAPQAOAPAAAbIAAAEIhSAAQABATAJAKQAKAKANgBQAKABAHgGQAIgFAEgMIAUACQgFARgNAJQgMAKgTAAQgYAAgOgPgAgUghQgJAJgBAOIA9AAQgBgOgGgHQgJgLgOAAQgMABgJAIg");
	this.shape_70.setTransform(122.125,-10.15);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgkArQgOgPAAgbQAAgbAOgQQAPgPAWAAQAWAAAOAPQAOAPAAAbIAAAEIhSAAQABATAJAKQAKAKANgBQAKABAHgGQAIgFAEgMIAUACQgFARgNAJQgMAKgTAAQgYAAgOgPgAgUghQgJAJgBAOIA9AAQgBgOgGgHQgJgLgOAAQgMABgJAIg");
	this.shape_71.setTransform(115.725,-10.15);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AAWA4IgShCIgEgTIgVBVIgUAAIgihuIATAAIASA/IAHAXIAFgWIAShAIASAAIARA/IAGAVIAGgVIATg/IASAAIgiBug");
	this.shape_72.setTransform(107.475,-10.15);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AglArQgOgPAAgcQAAgeARgPQAOgMAUAAQAXAAAPAPQAOAPAAAbQAAAUgGAMQgHAMgMAHQgMAHgPAAQgWAAgPgPgAgWgfQgKAKAAAVQAAAWAKAKQAJALANgBQAOABAJgLQAKgLAAgVQAAgVgKgKQgJgLgOAAQgNAAgJALg");
	this.shape_73.setTransform(99.325,-10.15);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgIBNIAAiZIASAAIAACZg");
	this.shape_74.setTransform(95.7,-12.275);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgIBNIAAiZIASAAIAACZg");
	this.shape_75.setTransform(95.7,-12.275);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgpAxQgJgJAAgOQAAgIADgHQAEgHAHgDQAFgEAIgCIARgCQAWgDAKgEIABgFQAAgLgGgFQgHgGgOgBQgNABgGAEQgGAEgEAMIgSgCQADgMAFgHQAGgHALgEQALgEANAAQAPAAAJADQAIADAEAGQAFAEACAIIAAASIAAAYQAAAaACAHQABAHADAHIgUAAQgCgHgBgHQgLAIgJAFQgJADgLAAQgTAAgKgJgAgEAHQgMACgEACQgFABgCAFQgDADAAAGQAAAHAGAFQAFAFAMAAQAJAAAJgFQAIgEAEgIQADgHAAgNIAAgGQgKAEgUADg");
	this.shape_76.setTransform(92.9,-10.15);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AAoBNIAAhJIhPAAIAABJIgUAAIAAiZIAUAAIAAA/IBPAAIAAg/IAUAAIAACZg");
	this.shape_77.setTransform(84.725,-12.275);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAXBNIgkg5IgNANIAAAsIgTAAIAAiZIATAAIAABXIArgsIAZAAIgqAoIAuBGg");
	this.shape_78.setTransform(77.325,-12.275);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgdA5IAAhuIARAAIAAAQQAGgLAGgEQAEgEAHAAQAJAAAKAGIgGASQgHgFgHAAQgGAAgEAEQgFAEgCAHQgDAKAAAMIAAA5g");
	this.shape_79.setTransform(74.075,-10.275);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgpAxQgJgJAAgOQAAgIAEgHQADgHAHgDQAFgEAIgCIARgCQAVgDALgEIABgFQgBgLgFgFQgIgGgNgBQgNABgGAEQgGAEgDAMIgTgCQACgMAGgHQAGgHALgEQALgEANAAQAPAAAJADQAIADAEAGQAEAEADAIIAAASIAAAYQAAAaABAHQACAHADAHIgUAAQgDgHAAgHQgLAIgJAFQgJADgLAAQgSAAgLgJgAgEAHQgMACgEACQgFABgCAFQgDADAAAGQAAAHAFAFQAGAFAMAAQAJAAAIgFQAJgEAEgIQADgHAAgNIAAgGQgKAEgUADg");
	this.shape_80.setTransform(69.15,-10.15);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("Ag6BNIAAiZIA6AAQAPAAAIACQALACAIAFQAIAFAEAKQAFAJgBAMQAAATgMANQgMANghAAIgmAAIAAA/gAglgDIAmAAQAVAAAHgHQAJgHAAgOQAAgJgFgHQgFgHgIgCQgFgCgOAAIgmAAg");
	this.shape_81.setTransform(61.95,-12.275);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgkArQgOgPAAgbQAAgbAOgQQAPgPAWAAQAWAAAOAPQAOAPAAAbIAAAEIhSAAQABATAJAKQAKAKANgBQAKABAHgGQAIgFAEgMIAUACQgFARgNAJQgMAKgTAAQgYAAgOgPgAgUghQgJAJgBAOIA9AAQgBgOgGgHQgJgLgOAAQgMABgJAIg");
	this.shape_82.setTransform(53.525,-10.15);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AA5A5IAAhFQgBgMgBgFQgCgFgFgDQgEgDgHAAQgMAAgHAIQgIAIAAARIAABAIgSAAIAAhIQAAgMgFgGQgFgHgKAAQgIAAgGAFQgIAEgCAIQgEAIAAAPIAAA5IgTAAIAAhuIARAAIAAAPQAFgIAKgFQAIgFALAAQANAAAHAFQAIAFACAJQAOgTAVAAQAQAAAJAJQAKAJgBATIAABMg");
	this.shape_83.setTransform(44.2,-10.275);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgkArQgOgPAAgbQAAgbAOgQQAPgPAWAAQAWAAAOAPQAOAPAAAbIAAAEIhSAAQABATAJAKQAKAKANgBQAKABAHgGQAIgFAEgMIAUACQgFARgNAJQgMAKgTAAQgYAAgOgPgAgUghQgJAJgBAOIA9AAQgBgOgGgHQgJgLgOAAQgMABgJAIg");
	this.shape_84.setTransform(34.775,-10.15);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AAbBNIAAhHQAAgNgGgGQgHgHgLAAQgHAAgIAFQgHAEgDAHQgDAHAAANIAAA9IgTAAIAAiZIATAAIAAA3QANgPATAAQAMAAAKAFQAJAFAEAIQADAJAAAPIAABHg");
	this.shape_85.setTransform(28.375,-12.275);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgJBNIAAiHIgzAAIAAgSIB5AAIAAASIgzAAIAACHg");
	this.shape_86.setTransform(21.425,-12.275);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AAJBNIAAh3QgGAHgKAGQgMAGgIAEIAAgSQAPgIAMgKQALgLAFgKIAMAAIAACZg");
	this.shape_87.setTransform(13.575,-12.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AAABPIAJgsIggAAIgJAsIgPAAIAJgsIgSAAIAAgQIAVAAIAIglIgdAAIAAgPIAgAAIAJgtIAPAAIgJAtIAgAAIAJgtIAQAAIgJAtIASAAIAAAPIgVAAIgIAlIAdAAIAAAQIggAAIgJAsgAgTATIAfAAIAIglIggAAg");
	this.shape_88.setTransform(7.925,-12.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]}).to({state:[]},70).wait(70));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-26,233.2,28);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0,-26,289.9,28), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.Symbol10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.bitmap9, null, new cjs.Matrix2D(1,0,0,1,-139.5,-46.5)).s().p("A1yHRIAAuhMArlAAAIAAOhg");
	this.shape.setTransform(139.5,46.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,279,93);
p.frameBounds = [rect];


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_111 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(111).call(this.frame_111).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.bitmap4, null, new cjs.Matrix2D(1,0,0,1,-387.5,-258)).s().p("Eg8iAoUMAAAhQnMB5FAAAMAAABQng");
	this.shape.setTransform(387.5,258);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,775,516);
p.frameBounds = [rect];


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.bitmap1, null, new cjs.Matrix2D(1,0,0,1,-375,-255)).s().p("Eg6lAn2MAAAhPrMB1LAAAMAAABPrg");
	this.shape.setTransform(375,255);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,750,510);
p.frameBounds = [rect];


(lib.Symbol43 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.bitmap40, null, new cjs.Matrix2D(1,0,0,1,-75,-61)).s().p("ArtJiIAAzDIXbAAIAATDg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(3));

	// Layer 3
	this.instance = new lib.Symbol39("synched",0);
	this.instance.setTransform(0,0.35);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.bitmap40, null, new cjs.Matrix2D(1,0,0,1,-75,-61)).s().p("ArtJiIAAzDIXbAAIAATDg");
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(3).to({_off:false},0).wait(1));

	// Layer 5
	this.instance_1 = new lib.Symbol39("synched",0);
	this.instance_1.setTransform(65,-19.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1));

	// Layer 6
	this.instance_2 = new lib.Symbol42();
	this.instance_2.setTransform(0,0.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(img.bitmap37, null, new cjs.Matrix2D(1,0,0,1,-75,-61)).s().p("ArtJiIAAzDIXbAAIAATDg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-106.5,194,174.9);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-75,-106.5,194,194.4)];


(lib.Symbol11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol10("synched",0);
	this.instance.setTransform(-139.5,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol11, rect = new cjs.Rectangle(-139.5,-46.5,279,93), [rect]);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {projector:4};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_26 = function() {
		/* gotoAndStop("projector");
		play();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(26).call(this.frame_26).wait(1));

	// Layer_2
	this.instance = new lib.Symbol2("synched",0);
	this.instance.alpha = 0.6211;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({alpha:0.5508},0).wait(1).to({alpha:0.4805},0).wait(1).to({alpha:0.4219},0).wait(1).to({alpha:0.3516},0).wait(1).to({alpha:0.2813},0).wait(1).to({alpha:0.3594},0).wait(1).to({alpha:0.4492},0).wait(1).to({alpha:0.5313},0).wait(1).to({alpha:0.6094},0).wait(1).to({alpha:0.6914},0).wait(1).to({alpha:0.7695},0).wait(1).to({alpha:0.7109},0).wait(1).to({alpha:0.6602},0).wait(1).to({alpha:0.6094},0).wait(1).to({alpha:0.5508},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.5195},0).wait(1).to({alpha:0.5391},0).wait(1).to({alpha:0.5586},0).wait(1).to({alpha:0.5781},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6211},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,750,510);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


// stage content:
(lib.homepage_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [68,113,130,152,176,240];
	// timeline functions:
	this.frame_68 = function() {
		playSound("sound18",-1);
	}
	this.frame_113 = function() {
		playSound("sound25");
	}
	this.frame_130 = function() {
		playSound("sound28");
	}
	this.frame_152 = function() {
		playSound("sound31");
	}
	this.frame_176 = function() {
		playSound("sound34");
	}
	this.frame_240 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(68).call(this.frame_68).wait(45).call(this.frame_113).wait(17).call(this.frame_130).wait(22).call(this.frame_152).wait(24).call(this.frame_176).wait(64).call(this.frame_240).wait(23));

	// Layer_2
	this.instance = new lib.Symbol17();
	this.instance.setTransform(15.05,38.35);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},241).wait(22));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeBYIAAgFQAMAAAEgCQADgCABgDQACgDAAgQIAAhcQAAgSgBgGQgBgEgCgCQgCgCgEAAQgFAAgIAEIgCgEIApgUIAEAAIAACQQAAAPACADQABAEADACQAEACAMAAIAAAFg");
	this.shape.setTransform(349,210.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqBVQgGgEAAgFQAAgEADgDQADgDAEAAIAGABIAKAFIALAFQAEABAGAAQAMAAAJgKQAKgKAAgOQAAgKgEgJQgDgHgEgEQgGgFgKgEQgIgEgKAAIgEAAIAAgDQAKgBAJgGQAKgGAFgJQAEgIAAgKQAAgNgIgIQgIgIgLAAQgUAAgNAVIgEgCQAHgSAMgJQALgJAPAAQAVAAALANQAJAKgBALQAAATgXAUQAPAHAJAKQAIAMAAAPQAAAXgOAQQgTAVgiAAQgRAAgHgEg");
	this.shape_1.setTransform(332.5,210.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgpA8IAAgFQAJAAAEgDQAEgCABgEIAAgMIAAgsIAAgZQgBgEgCgBQgDgCgDAAQgEAAgFACIgBgFIAjgOIAFAAIAAAaQAOgaAPAAQAHAAAFAEQAEAFAAAFQAAAFgDAEQgDADgFAAQgEAAgGgEQgFgFgDAAQgCAAgDADQgGAFgFAMIAAA3QAAAJACAFQABAEAFACQAEACAIAAIAAAFg");
	this.shape_2.setTransform(309.875,213.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AghAuQgPgRAAgbQAAgdAPgRQAPgRAXAAQATAAANANQAMANAAAWIhPAAQAAAZAMAOQANAPAQAAQAMAAAIgGQAJgGAFgQIAEADQgCARgNAPQgNAOgTAAQgUAAgPgQgAgUgrQgJAIgBAOIA1AAQgBgLgCgEQgDgHgGgFQgHgEgGAAQgKAAgIAJg");
	this.shape_3.setTransform(296.725,213.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTBZQgKgEgLgHIAAh4QAAgUgBgEQgBgFgCgBQgCgCgDAAQgEAAgFACIgCgFIAjgOIAGAAIAABUQARgXASAAQASAAANAPQAOAPAAAaQAAAfgVATQgRAQgWAAQgJAAgLgDgAgGgJQgFADgIAGIAABGQAGAHAHADQAGADAHAAQAMAAAKgNQAKgNAAgYQAAgWgKgLQgKgMgNAAQgGAAgGADg");
	this.shape_4.setTransform(280.875,210.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgqAoQgNgRAAgWQAAgPAIgPQAIgRANgHQANgHANgBQAaABARATQANASAAAWQAAAPgIAPQgHAQgNAJQgOAHgOABQgaAAgQgWgAgQgxQgHAFgEAJQgFALAAAQQABAYAJASQALATAPAAQANgBAIgJQAHgLAAgYQAAgfgNgSQgJgMgNAAQgHABgGADg");
	this.shape_5.setTransform(265.35,213.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgFBLQgFgDgDgGQgCgGgBgNIAAhNIgSAAIAAgEQAHgDAIgHQAHgGAFgKQAEgEADgNIAEAAIAAAmIAbAAIAAAJIgbAAIAABKQABAMADADQADAEAFAAQAEAAAEgCQAEgDACgFIAFAAQgEANgJAGQgHAGgJAAQgGAAgFgDg");
	this.shape_6.setTransform(252.4,211.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgiAtQgOgQAAgdQAAgbAQgQQARgRAWgBQAQAAAMAJQALAKgBAJQAAAFgCADQgDADgGAAQgHAAgEgFQgDgCgBgIQAAgHgEgFQgFgDgIAAQgLAAgIAJQgLAMABAVQgBAUALAQQAKAQAQAAQANAAAKgJQAGgFAHgQIAEACQgFAXgOAMQgNANgRAAQgTAAgPgRg");
	this.shape_7.setTransform(239.9,213.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag7BAQgYgYAAgoQAAgoAcgbQAYgWAhAAQAhAAAZAaQAYAZAAAmQAAAmgYAaQgZAagjAAQgjAAgYgagAglg+QgRAUAAAqQAAApASAXQAOARAWAAQAYAAAQgTQAPgTAAgpQAAgrgRgVQgOgSgYAAQgXAAgOASg");
	this.shape_8.setTransform(221.625,210.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AggAKIAAgTIBBAAIAAATg");
	this.shape_9.setTransform(195.475,213.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgqBTQgHgGAAgHQAAgDADgCQADgEAEAAIAGABIAIAGQAKAGAJABQAOgBAMgKQALgMAAgQQAAgPgKgOQgKgNgRgHQgOgGgYgBIAhhCIA9AAIgKAVIgzAAIgLAXQAhAFATAUQARARAAAWQAAAOgFAMQgGALgIAIQgIAJgLAEQgNAIgQgBQgPAAgHgEg");
	this.shape_10.setTransform(171.925,210.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag4BYIAAgFQAtgpARgaQATgZAAgVQAAgQgKgLQgKgLgNAAQgNAAgKAIQgKAHgFAPIgFAAQADgYAOgMQANgNATAAQAUAAAOAOQAOANAAASQAAANgGANQgJAUgVAXIgnAqIAsAAIAUgBQAFgBAFgDQAEgEADgFIAFAAIgMAhg");
	this.shape_11.setTransform(155.875,210.275);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgpA8IAAgFQAJAAAEgDQAEgCABgEIAAgMIAAgsIAAgZQgBgEgCgBQgDgCgDAAQgEAAgFACIgBgFIAjgOIAFAAIAAAaQAOgaAPAAQAHAAAFAEQAEAFAAAFQAAAFgDAEQgDADgFAAQgEAAgGgEQgFgFgDAAQgCAAgDADQgGAFgFAMIAAA3QAAAJACAFQABAEAFACQAEACAIAAIAAAFg");
	this.shape_12.setTransform(132.975,213.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AghAuQgPgRAAgbQAAgdAPgRQAPgRAXAAQATAAANANQAMANAAAWIhPAAQAAAZAMAOQANAPAQAAQAMAAAIgGQAJgGAFgQIAEADQgCARgNAPQgNAOgTAAQgUAAgPgQgAgUgrQgJAIgBAOIA1AAQgBgLgCgEQgDgHgGgFQgHgEgGAAQgKAAgIAJg");
	this.shape_13.setTransform(119.825,213.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTBZQgKgEgLgHIAAh4QAAgUgBgEQgBgFgCgBQgCgCgDAAQgEAAgFACIgCgFIAjgOIAGAAIAABUQARgXASAAQASAAANAPQAOAPAAAaQAAAfgVATQgRAQgWAAQgJAAgLgDgAgGgJQgFADgIAGIAABGQAGAHAHADQAGADAHAAQAMAAAKgNQAKgNAAgYQAAgWgKgLQgKgMgNAAQgGAAgGADg");
	this.shape_14.setTransform(103.975,210.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAqA8IAAgFIADAAQAHAAAEgDQADgCACgEIAAgNIAAgxQAAgOgEgGQgEgIgMAAQgGAAgHAEQgGADgLAJIAAACIAAAFIAAA2QABAMABADQACADADACQAEACAIAAIAAAFIg5AAIAAgFQAJAAAEgCQAEgCABgFQABgCAAgLIAAgxQAAgOgFgGQgFgIgKAAQgHAAgHAEQgKAFgGAHIAAA9QAAAMACADQACAEADACQACABAKAAIAAAFIg5AAIAAgFQAIAAACgBQAEgCACgEQABgEAAgLIAAgrQAAgTgBgGIgCgFQgDgCgDAAQgEAAgEACIgCgFIAjgOIAFAAIAAAZIAPgPQAGgFAGgCQAHgDAHAAQAKAAAIAGQAHAHADAMQANgPAJgFQAJgFAKAAQAIAAAIAFQAHAFAFAKQACAIAAAPIAAAxQAAALABAEQACADAEACQADACAIAAIAAAFg");
	this.shape_15.setTransform(84.9,213.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AghAuQgPgRAAgbQAAgdAPgRQAPgRAXAAQATAAANANQAMANAAAWIhPAAQAAAZAMAOQANAPAQAAQAMAAAIgGQAJgGAFgQIAEADQgCARgNAPQgNAOgTAAQgUAAgPgQgAgUgrQgJAIgBAOIA1AAQgBgLgCgEQgDgHgGgFQgHgEgGAAQgKAAgIAJg");
	this.shape_16.setTransform(66.075,213.225);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgFBLQgFgDgDgGQgDgGABgNIAAhNIgTAAIAAgEQAHgDAHgHQAHgGAHgKQACgEAFgNIADAAIAAAmIAbAAIAAAJIgbAAIAABKQAAAMAEADQADAEAFAAQAEAAAEgCQAEgDACgFIAFAAQgEANgJAGQgHAGgJAAQgGAAgFgDg");
	this.shape_17.setTransform(53.75,211.425);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag8BYIAAgFIAEAAQAGAAAFgDQADgBABgDQABgDAAgNIAAhtQAAgLgBgDQAAgEgDgBQgCgBgEAAQgDgBgFACIgCgDIAkgPIAGAAIAAAbQAIgPAKgGQAHgHALAAQARAAAMAOQAOARAAAaQAAAegRAUQgOAPgWABQgIgBgHgCQgGgCgFgFIAAAjQgBALACAEQACADADACQAEACAIAAIAAAFgAgEhCQgEADgKALIAAAsQAAANABAFQABAHAIAFQAGAGAKAAQANAAAHgKQAKgNAAgWQAAgbgLgPQgIgKgLAAQgHAAgFADg");
	this.shape_18.setTransform(40,215.85);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AghAuQgPgRAAgbQAAgdAPgRQAPgRAXAAQATAAANANQAMANAAAWIhPAAQAAAZAMAOQANAPAQAAQAMAAAIgGQAJgGAFgQIAEADQgCARgNAPQgNAOgTAAQgUAAgPgQgAgUgrQgJAIgBAOIA1AAQgBgLgCgEQgDgHgGgFQgHgEgGAAQgKAAgIAJg");
	this.shape_19.setTransform(25.325,213.225);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgKBZIgRgFQgMgEgDAAQgDAAgCACQgCACgBAGIgFAAIAAg7IAFAAQADATAGAIQAGAKALAGQALAGANAAQAQAAAJgIQAKgJgBgLQABgGgEgHQgDgGgIgGQgFgEgVgMQgWgLgJgIQgKgIgEgIQgFgJAAgLQAAgTAOgNQAOgNAWAAQANAAAPAHQAIADACAAQADAAADgCQABgCACgGIAEAAIAAA7IgEAAQgDgQgFgLQgGgKgLgGQgLgGgKAAQgOAAgJAIQgIAIAAALQAAAHAGAHQAHAKAdAPQAYANAJAGQAJAHAEAJQAFAKAAAKQAAATgPAPQgPAOgYAAIgNgBg");
	this.shape_20.setTransform(9.35,210.45);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D2B576").s().p("AgWA5IgHAAQgDAAgCADIgEAAIAAgpIAEAAQAEARAKAJQAKAJALAAQAJAAAGgFQAFgFAAgHQAAgJgGgGQgGgGgSgKQgSgHgGgIQgGgHAAgLQAAgOAKgKQAKgJAQAAQAGgBAJADIAJACIADgBIADgDIAEAAIAAAnIgEAAQgFgTgHgHQgIgGgLAAQgJAAgFAEQgGAFAAAGQAAAHAEAFQAEAGAMAFIASAJQAaALAAAWQAAAPgMAKQgMAKgPgBQgKAAgNgEg");
	this.shape_21.setTransform(172.425,188.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D2B576").s().p("AgFBLQgFgDgDgGQgDgGABgNIAAhNIgTAAIAAgEQAHgDAHgHQAHgGAHgKQACgEAFgNIADAAIAAAmIAbAAIAAAJIgbAAIAABKQAAAMADADQAEAEAFAAQAEAAAEgCQAEgDACgFIAFAAQgEANgJAGQgHAGgJAAQgGAAgFgDg");
	this.shape_22.setTransform(160.75,186.375);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D2B576").s().p("AAGBaIAAgEIADAAQAIAAADgDQADgCABgFIABgMIAAgpQAAgTgCgFQgCgGgEgDQgFgDgGAAQgGAAgFADQgHADgJAKIAAA9QAAAMAAADQACADAEACQADACAJAAIAAAEIg5AAIAAgEQAHAAAFgDQACgBABgEQACgDAAgLIAAhoIgBgZQgBgEgCgCQgCgCgDAAIgIACIgDgEIAjgOIAHAAIAABVQAOgQAHgEQAIgEAIAAQAKAAAHAFQAHAFADAMQADAHAAAWIAAApQAAALACAEQABADADACQADACAIAAIAAAEg");
	this.shape_23.setTransform(147.5,184.975);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D2B576").s().p("AgwBNQgKgHAAgGIACgGIAJgOIAMgNIgJgHQgCgDAAgEQAAgFADgGQADgGANgKQgKgFgGgJQgFgKAAgLQgBgRANgNQAOgMAUAAQAQAAAMAIIAZAAIAGABIABABIABAEIgBAEIgBABIgGABIgQAAQAIAJgBAOQAAAQgMAMQgNALgTAAQgJAAgJgCQgGAFgCACQgBAEAAACQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABQADACAFAAIASABQAZABAJABQALACAIAHQAGAHABAKQAAAPgOAMQgUATgfAAQgYAAgRgLgAglAsQgCAFAAAFQAAAGAHAFQAMAIAYAAQAWAAALgIQALgIAAgKQAAgGgGgDQgHgDgUAAQgbgBgQgCQgFAGgEAGgAgUhJQgGAHgBAQQABAUAIALQAHAIAKAAQAJAAAGgHQAGgHAAgQQAAgUgIgLQgHgJgJAAQgJAAgHAIg");
	this.shape_24.setTransform(131.65,190.825);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D2B576").s().p("AgaBaIAAgEQAIAAADgCIAFgFQABgEAAgLIAAgtQAAgTgBgEQgBgEgCgCQgBgCgEAAQgDAAgFACIgCgEIAigOIAFAAIAABcQAAALACAEQACADADACQADACAIAAIAAAEgAgHhDQgEgEAAgFQAAgGAEgDQADgEAFAAQAFAAAEAEQAEADAAAGQAAAFgEAEQgEADgFAAQgEAAgEgDg");
	this.shape_25.setTransform(118.475,184.975);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D2B576").s().p("ABBBYIhxiLIAABpQAAAQAEAEQAFAGAKAAIAGAAIAAAFIg8AAIAAgFIAGAAQALAAAEgHQADgEAAgPIAAh2QgHgJgEgCQgEgEgIgCIgLgBIAAgFIAvAAIBoCBIAAhjQAAgPgDgEQgFgGgKAAIgGAAIAAgFIA8AAIAAAFIgGAAQgLAAgFAHQgDADAAAPIAACRg");
	this.shape_26.setTransform(102.025,185.55);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D2B576").s().p("AgEBLQgGgDgDgGQgDgGABgNIAAhNIgTAAIAAgEQAHgDAHgHQAHgGAHgKQACgEAFgNIADAAIAAAmIAbAAIAAAJIgbAAIAABKQAAAMADADQAEAEAFAAQAEAAAEgCQAEgDACgFIAFAAQgEANgJAGQgHAGgJAAQgGAAgEgDg");
	this.shape_27.setTransform(77.05,186.375);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D2B576").s().p("AghAtQgPgRAAgcQAAgbAQgQQARgSAVABQASgBALAKQAKAIABAKQAAAFgEADQgDADgFAAQgHAAgFgFQgCgDAAgHQgBgIgFgEQgEgDgIAAQgLAAgIAJQgKAMAAAVQAAAUAKAQQAKAQARAAQALAAAKgJQAIgFAGgQIAEACQgFAXgOAMQgNAMgRAAQgSAAgPgQg");
	this.shape_28.setTransform(64.55,188.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D2B576").s().p("AghAuQgPgRAAgbQAAgdAPgRQAPgRAXAAQATAAANANQAMANAAAWIhPAAQAAAZAMAOQANAPAQAAQAMAAAIgGQAJgGAFgQIAEADQgCARgNAPQgNAOgTAAQgUAAgPgQgAgUgrQgJAIgBAOIA1AAQgBgLgCgEQgDgHgGgFQgHgEgGAAQgKAAgIAJg");
	this.shape_29.setTransform(50.075,188.175);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D2B576").s().p("AgaBaIAAgEQAIAAADgCIAEgFQACgEAAgLIAAhpQAAgTgBgFQgBgEgCgCQgCgCgDAAQgDAAgFACIgDgEIAigOIAGAAIAACZQAAALACADQABAEADACQAEACAJAAIAAAEg");
	this.shape_30.setTransform(37.725,184.975);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D2B576").s().p("AghAuQgPgRAAgbQAAgdAPgRQAPgRAXAAQATAAANANQAMANAAAWIhPAAQAAAZAMAOQANAPAQAAQAMAAAIgGQAJgGAFgQIAEADQgCARgNAPQgNAOgTAAQgUAAgPgQgAgUgrQgJAIgBAOIA1AAQgBgLgCgEQgDgHgGgFQgHgEgGAAQgKAAgIAJg");
	this.shape_31.setTransform(25.325,188.175);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D2B576").s().p("AgKBZIgRgFIgPgEQgDAAgCACQgCACgBAGIgFAAIAAg7IAFAAQADASAGAJQAGAKALAGQALAGANAAQAQAAAJgJQAKgHgBgMQABgHgEgGQgDgHgIgFQgFgEgVgMQgWgLgJgIQgKgIgEgIQgFgJAAgLQAAgSAOgOQAOgNAWAAQANAAAPAGQAIAEACAAQADAAADgCQABgCACgGIAEAAIAAA7IgEAAQgDgRgFgKQgGgKgLgGQgLgGgKAAQgOAAgJAIQgIAIAAALQAAAHAGAHQAHAJAdAQQAYANAJAGQAJAHAEAJQAFAKAAAKQAAATgPAPQgPAOgYAAIgNgBg");
	this.shape_32.setTransform(9.35,185.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#A61316").s().p("AgKBdIgSgEQgNgFgDAAQgEAAgBACQgDADgBAFIgEAAIAAg+IAEAAQAEAUAGAKQAGAKAMAGQAMAGANAAQARAAAKgJQAJgIAAgMQABgHgEgHQgEgHgHgGIgcgRQgXgLgKgIQgKgIgFgJQgFgKAAgLQAAgTAPgOQAPgPAXAAQAOABAQAGQAHAEADAAQAEAAACgCQACgCABgHIAFAAIAAA/IgFAAQgCgSgHgLQgGgKgLgHQgLgFgMAAQgNgBgJAJQgKAIABALQAAAIAFAHQAJAKAeAQQAZAOAJAHQAJAHAFAJQAFAKAAAMQAAAUgQAPQgPAOgaAAIgNgBg");
	this.shape_33.setTransform(344.85,159.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#A61316").s().p("AAqBcIgphyIgoByIgFAAIg2iUIgHgVQgDgFgFgCQgEgDgIAAIAAgEIBDAAIAAAEIgDAAQgHAAgEAEQgDADAAAFQgBAEAGARIAjBkIAehUIgEgQIgFgMIgGgMIgFgEQgDgCgDgCIgIgBIAAgEIBFAAIAAAEIgEAAQgIAAgDAEQgEADAAAGQAAAGAGARIAjBhIAihiQAGgRAAgGQAAgDgCgDQgCgCgDgBQgFgDgIAAIAAgEIA2AAIAAAEQgHAAgEADQgFACgEAIIgIAWIgzCQg");
	this.shape_34.setTransform(321.35,159.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A61316").s().p("Ag+BEQgagaAAgqQABgrAdgbQAagXAigBQAjAAAaAbQAaAbAAAoQAAAogaAbQgbAbgkAAQglAAgZgagAgnhCQgSAXAAArQAAArATAYQAOASAYAAQAZAAAQgUQARgTAAgsQAAgsgSgYQgPgSgZAAQgYAAgPASg");
	this.shape_35.setTransform(295.5,159.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A61316").s().p("AAQBbIAAgGIAGAAQAMABAFgHQADgEAAgRIAAg3IhTAAIAAA3QAAAOACAEQABAEAFACQAFADAGAAIAHAAIAAAGIhOAAIAAgGIAHAAQALABAGgHQACgEAAgRIAAhzQABgOgCgFQgBgDgFgCQgFgEgHAAIgHAAIAAgEIBOAAIAAAEIgHAAQgGAAgFAEQgFACgCAEQgBAFAAANIAAAzIBTAAIAAgzQAAgOgCgFQgBgDgEgCQgGgEgHAAIgGAAIAAgEIBNAAIAAAEIgGAAQgGAAgGAEQgEACgCAEQgCAFAAANIAABzQAAAOACAEQACAEAEACQAGADAGAAIAGAAIAAAGg");
	this.shape_36.setTransform(272.8,159.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#A61316").s().p("AgKBdIgRgEQgNgFgEAAQgDAAgDACQgCADgBAFIgEAAIAAg+IAEAAQAEAUAGAKQAGAKAMAGQAMAGANAAQARAAAKgJQAJgIAAgMQAAgHgDgHQgEgHgIgGIgbgRQgXgLgKgIQgKgIgFgJQgFgKAAgLQAAgTAPgOQAPgPAXAAQANABARAGQAHAEADAAQAEAAACgCQACgCABgHIAFAAIAAA/IgFAAQgCgSgGgLQgHgKgLgHQgLgFgMAAQgOgBgIAJQgKAIABALQgBAIAGAHQAIAKAfAQQAYAOAKAHQAJAHAFAJQAFAKAAAMQAAAUgQAPQgPAOgaAAIgNgBg");
	this.shape_37.setTransform(252.5,159.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#A61316").s().p("AhMBbIAAgGIAGAAQAGAAAGgDQAFgCABgEQACgEAAgOIAAh0QAAgRgEgEQgFgGgLAAIgGAAIAAgEICKAAIACAnIgFAAQgDgOgEgFQgDgFgHgEQgFgBgOAAIgwAAIAABHIAnAAQAPAAAFgFQAIgFAAgQIAFAAIAAA+IgFAAQgCgNgBgEQgDgFgFgDQgGgCgLAAIgnAAIAAA8QAAALABADQABADADABQACABAIABIAeAAQAPAAAHgCQAHgDAGgGQAJgIAIgRIAGAAIgQAug");
	this.shape_38.setTransform(223.55,159.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#A61316").s().p("AABBcIhDiaQgFgMgDgDQgDgEgFgCQgFgCgIgCIAAgEIBKAAIAAAEQgNACgDADQgEADAAAFQAAAHAGANIAtBqIArhoQAGgPAAgGQAAgFgEgDQgEgEgJgBIgCgBIAAgEIA4AAIAAAEQgKACgFAFQgHAGgFAOIhACYg");
	this.shape_39.setTransform(202.375,159.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#A61316").s().p("AglBbIAAgGIAFAAQAMABAFgHQADgEAAgRIAAh0QAAgNgCgFQgBgDgEgCQgGgEgHAAIgFAAIAAgEIBLAAIAAAEIgGAAQgLAAgFAHQgDAEAAAQIAAB0QAAAOACAEQABAEAEACQAGADAGAAIAGAAIAAAGg");
	this.shape_40.setTransform(185,159.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#A61316").s().p("AhNBbIAAgGIAHAAQALABAFgIQADgEAAgQIAAh0QAAgQgEgFQgFgFgKgBIgHAAIAAgEIBRAAIAAAEQgNAAgGAEQgGACgCAEQgCAFAAAQIAABwQAAAMACADQACADADABQADACARAAIANAAQAVAAAIgDQAIgDAHgIQAHgHAHgSIAFABIgQAyg");
	this.shape_41.setTransform(169.075,159.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAqBcIgphyIgoByIgFAAIg2iUIgHgVQgDgFgFgCQgEgDgIAAIAAgEIBDAAIAAAEIgDAAQgHAAgEAEQgDADAAAFQgBAEAGARIAjBkIAehUIgEgQIgFgMIgGgMIgFgEQgDgCgDgCIgIgBIAAgEIBFAAIAAAEIgEAAQgIAAgDAEQgEADAAAGQAAAGAGARIAjBhIAihiQAGgRAAgGQAAgDgCgDQgCgCgDgBQgFgDgIAAIAAgEIA2AAIAAAEQgHAAgEADQgFACgEAIIgIAWIgzCQg");
	this.shape_42.setTransform(144.95,159.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AhMBbIAAgGIAGAAQAHAAAFgDQAFgCABgEQABgEABgOIAAh0QgBgRgDgEQgFgGgLAAIgGAAIAAgEICKAAIACAnIgGAAQgCgOgEgFQgDgFgHgEQgFgBgOAAIgwAAIAABHIAnAAQAPAAAFgFQAIgFAAgQIAFAAIAAA+IgFAAQgBgNgCgEQgDgFgFgDQgGgCgLAAIgnAAIAAA8QAAALABADQABADADABQACABAIABIAeAAQAPAAAHgCQAHgDAGgGQAIgIAJgRIAFAAIgPAug");
	this.shape_43.setTransform(120.6,159.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("ABEBcIh2iQIAABuQAAAQADAEQAGAGAKAAIAHAAIAAAFIg/AAIAAgFIAFAAQAMAAAFgHQADgEAAgPIAAh9IgMgMQgEgDgIgDQgEgBgHAAIAAgFIAwAAIBuCHIAAhnQAAgRgEgEQgEgGgMAAIgFAAIAAgFIA/AAIAAAFIgHAAQgMAAgEAHQgDAEAAAQIAACXg");
	this.shape_44.setTransform(99.1,159.75);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AhNBbIAAgGIAHAAQALABAFgIQADgEAAgQIAAh0QAAgQgEgFQgFgFgKgBIgHAAIAAgEIBRAAIAAAEQgNAAgGAEQgGACgCAEQgCAFAAAQIAABwQAAAMACADQACADADABQADACARAAIANAAQAVAAAIgDQAIgDAHgIQAHgHAHgSIAFABIgQAyg");
	this.shape_45.setTransform(69.375,159.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AhNBbIAAgGIAHAAQALABAFgIQADgEAAgQIAAh0QAAgQgEgFQgFgFgKgBIgHAAIAAgEIBRAAIAAAEQgNAAgGAEQgGACgCAEQgCAFAAAQIAABwQAAAMACADQACADADABQADACARAAIANAAQAVAAAIgDQAIgDAHgIQAHgHAHgSIAFABIgQAyg");
	this.shape_46.setTransform(49.675,159.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAZBdIAAgGQALAAADgDQAEgDAAgFQAAgGgFgMIgLgaIhFAAIgNAcQgEALAAAFQAAAFAEADQAEACANABIAAAGIg5AAIAAgGQAMgCADgCQAHgHAIgTIA/iVIAEAAIA/CWQAHASAHAGQAGAFALAAIAAAGgAgmAWIA9AAIgdhIg");
	this.shape_47.setTransform(28.45,159.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#A61316").s().p("Ag6BcIAAgFQAugrASgbQAUgaAAgXQAAgRgLgLQgLgLgNAAQgNAAgLAIQgLAIgFAPIgFAAQAEgZAOgNQANgNAVAAQAVAAAPAOQAPAOAAATQgBAOgGAOQgJAUgXAYIgoAsIAuAAIAUgBQAGgBAFgDQAEgEAEgGIAEAAIgMAjg");
	this.shape_48.setTransform(8.55,159.425);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#A61316").s().p("AgLBdIgRgEQgNgFgDAAQgDAAgCACQgDADgBAFIgEAAIAAg+IAEAAQAEAUAGAKQAGAKAMAGQAMAGANAAQARAAAKgJQAJgIAAgMQABgHgEgHQgEgHgHgGIgcgRQgXgLgKgIQgKgIgFgJQgFgKAAgLQAAgTAPgOQAPgPAXAAQAOABAQAGQAHAEADAAQAEAAACgCQACgCABgHIAFAAIAAA/IgFAAQgCgSgHgLQgFgKgMgHQgLgFgMAAQgNgBgKAJQgJAIAAALQABAIAFAHQAJAKAdAQQAaAOAJAHQAJAHAFAJQAFAKAAAMQAAAUgQAPQgPAOgaAAIgOgBg");
	this.shape_49.setTransform(366.1,133.05);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#A61316").s().p("AhNBbIAAgGIAHAAQAHAAAFgCQAEgDACgEQABgEAAgOIAAh0QABgRgEgEQgFgGgLAAIgHAAIAAgEICLAAIACAnIgFAAQgDgOgDgGQgEgEgGgEQgGgBgNAAIgxAAIAABHIAnAAQAPAAAGgFQAGgFABgQIAFAAIAAA+IgFAAQgCgNgCgEQgCgFgGgDQgFgCgLAAIgnAAIAAA8QAAALABADQABADADABQADABAHABIAdAAQAQAAAHgCQAHgDAGgGQAIgIAJgRIAGAAIgQAug");
	this.shape_50.setTransform(347,133.05);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#A61316").s().p("ABEBcIh3iQIAABuQABAQAEAEQAEAGALAAIAGAAIAAAFIg/AAIAAgFIAGAAQANAAAEgHQADgEAAgPIAAh9IgMgMQgEgDgIgCQgDgCgJAAIAAgFIAyAAIBtCHIAAhnQAAgRgEgEQgEgGgLAAIgHAAIAAgFIA/AAIAAAFIgGAAQgMAAgEAHQgEAEAAAQIAACXg");
	this.shape_51.setTransform(325.5,133.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#A61316").s().p("Ag+BEQgagaAAgqQAAgrAegbQAZgXAjgBQAjAAAaAbQAaAbgBAoQAAAogaAbQgaAbgkAAQglAAgZgagAgmhCQgTAXAAArQAAArATAYQAOASAYAAQAZAAARgUQAQgTAAgsQAAgsgSgYQgPgSgZAAQgYAAgOASg");
	this.shape_52.setTransform(303.1,133.05);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#A61316").s().p("AhNBbIAAgGIBzikIg5AAQgOAAgGADQgHAEgDAGQgEAFgDARIgFAAIAEgtICFAAIh2CpIBJAAQARAAAJgIQAJgHAIgXIAEABIgJAwg");
	this.shape_53.setTransform(281.725,133.05);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#A61316").s().p("AhMBbIAAgGIAGAAQAGAAAGgCQAFgDABgEQACgEAAgOIAAh0QAAgRgEgEQgFgGgLAAIgGAAIAAgEICKAAIACAnIgFAAQgDgOgEgGQgDgEgHgEQgFgBgOAAIgwAAIAABHIAnAAQAPAAAFgFQAIgFAAgQIAFAAIAAA+IgFAAQgCgNgBgEQgDgFgFgDQgGgCgLAAIgnAAIAAA8QAAALABADQABADADABQACABAIABIAeAAQAPAAAHgCQAHgDAGgGQAJgIAIgRIAGAAIgQAug");
	this.shape_54.setTransform(252.35,133.05);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#A61316").s().p("AApBbIg8hVIgLABIgDAAIgFgBIAAA0QAAASAFAEQAFAFAJAAIAHAAIAAAGIhNAAIAAgGIAHAAQAMABAEgIQADgEAAgQIAAh0QAAgRgEgEQgFgFgKgBIgHAAIAAgEIBCAAQAcgBAOAFQANAEAJALQAKAMAAAPQAAARgLAMQgLANgXADIAmA1QANARAJAGQAJAGAPABIAAAGgAgmhNIAABMIAFAAIADAAQAaAAAMgMQANgKAAgSQAAgRgKgLQgLgKgQAAQgIAAgOACg");
	this.shape_55.setTransform(232.3,133.05);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#A61316").s().p("AAZBdIAAgGQAKAAAFgDQADgDAAgFQAAgGgFgMIgLgaIhFAAIgNAcQgEALAAAFQAAAFAEADQAEACANABIAAAGIg5AAIAAgGQAMgCADgCQAGgHAJgTIA/iVIAEAAIA/CWQAIASAGAGQAGAFALAAIAAAGgAgmAWIA9AAIgehIg");
	this.shape_56.setTransform(209.95,132.85);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#A61316").s().p("Ag+A+QgSgaAAghQAAgaAMgXQAMgXAVgMQAVgNAZAAQATAAATAKQAGADACAAQAEAAADgDQADgDABgHIAFAAIAEA+IgEAAQgIgbgPgMQgQgNgVAAQgRAAgPAJQgOAJgJAVQgIATAAAdQAAAYAIATQAIARAQAKQAPAKAUAAQARAAAOgIQANgHAQgWIAEACQgNAYgSALQgSALgZAAQgsAAgZggg");
	this.shape_57.setTransform(188.075,133.05);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#A61316").s().p("AgKBdIgSgEQgNgFgDAAQgEAAgBACQgDADgBAFIgEAAIAAg+IAEAAQAEAUAGAKQAGAKAMAGQAMAGANAAQARAAAKgJQAJgIAAgMQABgHgEgHQgEgHgHgGIgcgRQgXgLgKgIQgKgIgFgJQgFgKAAgLQAAgTAPgOQAPgPAXAAQAOABAQAGQAHAEADAAQAEAAACgCQACgCABgHIAFAAIAAA/IgFAAQgCgSgHgLQgGgKgLgHQgLgFgMAAQgNgBgJAJQgKAIABALQAAAIAFAHQAJAKAeAQQAZAOAJAHQAJAHAFAJQAFAKAAAMQAAAUgQAPQgPAOgaAAIgNgBg");
	this.shape_58.setTransform(168.45,133.05);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAqBcIgphyIgoByIgFAAIg2iUIgHgVQgDgFgFgCQgEgDgIAAIAAgEIBDAAIAAAEIgDAAQgHAAgEAEQgDADAAAFQgBAEAGARIAjBkIAehUIgEgQIgFgMIgGgMIgFgEQgDgCgDgCIgIgBIAAgEIBFAAIAAAEIgEAAQgIAAgDAEQgEADAAAGQAAAGAGARIAjBhIAihiQAGgRAAgGQAAgDgCgDQgCgCgDgBQgFgDgIAAIAAgEIA2AAIAAAEQgHAAgEADQgFACgEAIIgIAWIgzCQg");
	this.shape_59.setTransform(144.95,133.25);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AhMBbIAAgGIAGAAQAHAAAFgCQAFgDABgEQABgEABgOIAAh0QgBgRgDgEQgFgGgLAAIgGAAIAAgEICKAAIACAnIgGAAQgCgOgEgGQgDgEgHgEQgFgBgOAAIgwAAIAABHIAnAAQAPAAAFgFQAIgFAAgQIAFAAIAAA+IgFAAQgBgNgCgEQgDgFgFgDQgGgCgLAAIgnAAIAAA8QAAALABADQABADADABQACABAIABIAeAAQAPAAAHgCQAHgDAGgGQAIgIAJgRIAFAAIgPAug");
	this.shape_60.setTransform(120.6,133.05);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("ABEBcIh2iQIAABuQAAAQADAEQAGAGAKAAIAHAAIAAAFIg/AAIAAgFIAFAAQAMAAAFgHQADgEAAgPIAAh9IgMgMQgEgDgIgCQgEgCgHAAIAAgFIAwAAIBuCHIAAhnQAAgRgEgEQgEgGgMAAIgFAAIAAgFIA/AAIAAAFIgHAAQgMAAgEAHQgDAEAAAQIAACXg");
	this.shape_61.setTransform(99.1,133.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AhNBbIAAgGIAHAAQALABAFgIQADgEAAgQIAAh0QAAgQgEgFQgFgFgKgBIgHAAIAAgEIBRAAIAAAEQgNAAgGAEQgGACgCAEQgCAFAAAQIAABwQAAAMACADQACADADABQADACARAAIANAAQAVAAAIgDQAIgDAHgIQAHgHAHgSIAFABIgQAyg");
	this.shape_62.setTransform(69.375,133.05);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AhNBbIAAgGIAHAAQALABAFgIQADgEAAgQIAAh0QAAgQgEgFQgFgFgKgBIgHAAIAAgEIBRAAIAAAEQgNAAgGAEQgGACgCAEQgCAFAAAQIAABwQAAAMACADQACADADABQADACARAAIANAAQAVAAAIgDQAIgDAHgIQAHgHAHgSIAFABIgQAyg");
	this.shape_63.setTransform(49.675,133.05);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAZBdIAAgGQALAAADgDQAEgDAAgFQAAgGgFgMIgLgaIhFAAIgNAcQgEALAAAFQAAAFAEADQAEACANABIAAAGIg5AAIAAgGQAMgCADgCQAHgHAIgTIA/iVIAEAAIA/CWQAHASAHAGQAGAFALAAIAAAGgAgmAWIA9AAIgdhIg");
	this.shape_64.setTransform(28.45,132.85);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#A61316").s().p("AgfBSQgZgYAAgmQAAgXAKgWQAJgWATgRQASgRAPgGQARgGAOAAIAIAAIAAAFQgSACgLAFQgLAFgLALQgKALgHANQgHAOgFASQATgNASAAQATAAAOAPQANAOAAAXQAAAXgOASQgQAXgbAAQgSAAgNgMgAgLgJIgRAJQgDASAAALQAAAMAFAPQAFAPAJAJQAHAGAJAAQALAAAJgKQAJgLAAgVQAAgWgJgRQgJgQgPAAQgFAAgGACg");
	this.shape_65.setTransform(8.875,133.025);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#A61316").s().p("AgKBdIgRgEQgNgFgEAAQgDAAgDACQgCADgBAFIgEAAIAAg+IAEAAQAEAUAGAKQAGAKAMAGQAMAGANAAQARAAAKgJQAJgIAAgMQAAgHgDgHQgEgHgIgGIgbgRQgXgLgKgIQgKgIgFgJQgFgKAAgLQAAgTAPgOQAPgPAXAAQANABARAGQAHAEADAAQAEAAACgCQACgCABgHIAFAAIAAA/IgFAAQgCgSgGgLQgHgKgLgHQgLgFgMAAQgOgBgIAJQgKAIABALQgBAIAGAHQAIAKAfAQQAYAOAKAHQAJAHAFAJQAFAKAAAMQAAAUgQAPQgPAOgaAAIgNgBg");
	this.shape_66.setTransform(445.55,106.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#A61316").s().p("AhNBbIAAgGIAHAAQAGAAAGgCQAEgDACgEQACgEgBgOIAAh0QAAgRgDgEQgFgGgLAAIgHAAIAAgEICLAAIACAnIgGAAQgCgOgDgGQgEgEgGgEQgGgBgOAAIgwAAIAABHIAnAAQAPAAAGgFQAGgFABgQIAFAAIAAA+IgFAAQgCgNgCgEQgCgFgGgDQgFgCgLAAIgnAAIAAA8QAAALABADQABADADABQADABAHABIAdAAQAQAAAHgCQAHgDAGgGQAJgIAIgRIAFAAIgPAug");
	this.shape_67.setTransform(426.45,106.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#A61316").s().p("AgKBdIgRgEQgNgFgEAAQgEAAgCACQgCADgBAFIgEAAIAAg+IAEAAQAEAUAGAKQAGAKAMAGQAMAGANAAQARAAAKgJQAJgIAAgMQAAgHgDgHQgEgHgIgGIgbgRQgXgLgKgIQgKgIgFgJQgFgKAAgLQAAgTAPgOQAPgPAXAAQANABARAGQAHAEADAAQADAAADgCQACgCABgHIAFAAIAAA/IgFAAQgCgSgGgLQgHgKgLgHQgMgFgLAAQgOgBgIAJQgJAIAAALQgBAIAGAHQAIAKAfAQQAZAOAJAHQAJAHAFAJQAFAKAAAMQAAAUgPAPQgQAOgaAAIgNgBg");
	this.shape_68.setTransform(407.65,106.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#A61316").s().p("AgrBSQgPgKgHgRQgEgMAAghIAAhGQAAgQgFgFQgEgGgKAAIgHAAIAAgFIBOAAIAAAFIgHAAQgLAAgFAHQgDAFAAAPIAABOQAAALACANQABAOAGAIQAFAHAJAFQAKAFAMAAQASAAAOgIQAOgHAFgMQAFgNAAgcIAAhJQAAgQgDgFQgFgGgLAAIgHAAIAAgFIBAAAIAAAFIgGAAQgLAAgGAJQgDAEAAAQIAABIQAAAbgFAPQgFAPgQALQgQALgbAAQgdAAgPgLg");
	this.shape_69.setTransform(387.025,106.725);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#A61316").s().p("Ag+BEQgagaAAgqQABgrAdgbQAagXAigBQAjAAAaAbQAaAbAAAoQAAAogaAbQgaAbglAAQglAAgZgagAgnhCQgSAXAAArQAAArATAYQAOASAYAAQAZAAAQgUQARgTAAgsQAAgsgSgYQgPgSgZAAQgYAAgPASg");
	this.shape_70.setTransform(364.35,106.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#A61316").s().p("AAQBbIAAgGIAGAAQAMABAFgHQADgEAAgRIAAg3IhTAAIAAA3QAAAOACAEQABAEAFADQAFACAGAAIAHAAIAAAGIhOAAIAAgGIAHAAQALABAGgHQACgEAAgRIAAhzQABgOgCgFQgBgDgFgCQgFgEgHAAIgHAAIAAgEIBOAAIAAAEIgHAAQgGAAgFAEQgFACgCAEQgBAFAAANIAAAzIBTAAIAAgzQAAgOgCgFQgBgDgEgCQgGgEgHAAIgGAAIAAgEIBOAAIAAAEIgHAAQgGAAgGAEQgEACgCAEQgCAFAAANIAABzQAAAOACAEQACAEAEADQAGACAGAAIAHAAIAAAGg");
	this.shape_71.setTransform(341.65,106.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#A61316").s().p("AhaBbIAAgGIAHAAQALABAFgIQADgEAAgQIAAh0QAAgQgEgFQgFgFgKgBIgHAAIAAgEIBJAAQAoAAAVAJQAVAJANAVQANAWAAAcQAAAlgXAZQgaAcgzABgAgmhMIAACZQAQAEAMAAQAeAAAUgWQAVgVAAglQAAglgVgWQgUgVgfAAQgMAAgPADg");
	this.shape_72.setTransform(308.875,106.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#A61316").s().p("AhMBbIAAgGIAGAAQAGAAAGgCQAFgDABgEQACgEAAgOIAAh0QAAgRgEgEQgFgGgLAAIgGAAIAAgEICKAAIACAnIgFAAQgDgOgEgGQgDgEgHgEQgFgBgNAAIgxAAIAABHIAnAAQAPAAAFgFQAIgFAAgQIAFAAIAAA+IgFAAQgCgNgBgEQgDgFgFgDQgGgCgLAAIgnAAIAAA8QAAALABADQABADADABQACABAIABIAeAAQAPAAAHgCQAHgDAGgGQAJgIAIgRIAFAAIgPAug");
	this.shape_73.setTransform(287.9,106.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#A61316").s().p("AgmBbIAAgGIAGAAQAMAAAFgGQADgFAAgPIAAiJIgWAAQgNAAgFACQgHADgFAGQgFAIgBAMIgFAAIACgqICTAAIACAqIgFAAQgCgLgCgFQgEgHgHgEQgHgEgLAAIgaAAIAACJQAAARAEAEQAFAGAKgBIAHAAIAAAGg");
	this.shape_74.setTransform(268.325,106.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#A61316").s().p("ABEBcIh2iQIAABuQAAAQADAEQAGAGAKAAIAHAAIAAAFIg/AAIAAgFIAFAAQAMAAAFgHQADgEAAgPIAAh9IgMgMQgEgDgIgDQgEgBgHAAIAAgFIAwAAIBuCHIAAhnQAAgRgEgEQgEgGgMAAIgFAAIAAgFIA/AAIAAAFIgHAAQgMAAgEAHQgDAEAAAQIAACXg");
	this.shape_75.setTransform(246.7,106.65);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#A61316").s().p("AgrBSQgPgKgHgRQgEgMAAghIAAhGQAAgQgFgFQgEgGgKAAIgHAAIAAgFIBOAAIAAAFIgHAAQgLAAgFAHQgDAFAAAPIAABOQAAALACANQABAOAGAIQAFAHAJAFQAKAFAMAAQASAAAOgIQAOgHAFgMQAFgNAAgcIAAhJQAAgQgDgFQgFgGgLAAIgHAAIAAgFIBAAAIAAAFIgGAAQgLAAgGAJQgDAEAAAQIAABIQAAAbgFAPQgFAPgQALQgQALgbAAQgdAAgPgLg");
	this.shape_76.setTransform(224.275,106.725);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#A61316").s().p("AAZBdIAAgGQALAAAEgDQADgDAAgFQAAgGgFgMIgLgaIhFAAIgNAcQgEALAAAFQAAAFAEADQAEACANABIAAAGIg5AAIAAgGQAMgCADgCQAGgHAJgTIA/iVIAEAAIA/CWQAHASAHAGQAGAFALAAIAAAGgAgmAWIA9AAIgdhIg");
	this.shape_77.setTransform(201.6,106.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#A61316").s().p("AAQBbIAAgGIAHAAQALABAFgHQADgEAAgRIAAg3IhTAAIAAA3QAAAOACAEQABAEAEADQAGACAHAAIAGAAIAAAGIhNAAIAAgGIAGAAQAMABAEgHQAEgEAAgRIAAhzQgBgOgBgFQgCgDgEgCQgFgEgHAAIgGAAIAAgEIBNAAIAAAEIgGAAQgHAAgGAEQgEACgBAEQgCAFAAANIAAAzIBTAAIAAgzQAAgOgBgFQgCgDgEgCQgGgEgGAAIgHAAIAAgEIBOAAIAAAEIgHAAQgGAAgGAEQgEACgCAEQgBAFAAANIAABzQAAAOABAEQACAEAEADQAGACAGAAIAHAAIAAAGg");
	this.shape_78.setTransform(178.9,106.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AAqBcIgphyIgoByIgFAAIg1iUIgIgVQgDgFgFgCQgEgDgIAAIAAgEIBDAAIAAAEIgDAAQgHAAgEAEQgEADAAAFQAAAEAGARIAkBkIAdhUIgEgQIgFgMIgGgMIgFgEQgCgCgEgCIgIgBIAAgEIBFAAIAAAEIgEAAQgIAAgEAEQgDADAAAGQAAAGAGARIAjBhIAihiQAGgRAAgGQAAgDgCgDQgCgCgDgBQgFgDgIAAIAAgEIA2AAIAAAEQgHAAgEADQgFACgEAIIgIAWIgzCQg");
	this.shape_79.setTransform(153.3,106.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AhMBbIAAgGIAGAAQAGAAAGgCQAFgDABgEQACgEAAgOIAAh0QAAgRgEgEQgFgGgLAAIgGAAIAAgEICKAAIACAnIgFAAQgDgOgEgGQgDgEgHgEQgFgBgNAAIgxAAIAABHIAnAAQAPAAAFgFQAIgFAAgQIAFAAIAAA+IgFAAQgCgNgBgEQgDgFgFgDQgGgCgLAAIgnAAIAAA8QAAALABADQABADADABQADABAHABIAdAAQAQAAAHgCQAHgDAGgGQAJgIAIgRIAGAAIgQAug");
	this.shape_80.setTransform(128.95,106.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("ABEBcIh2iQIAABuQAAAQADAEQAGAGAKAAIAHAAIAAAFIg/AAIAAgFIAFAAQAMAAAFgHQADgEAAgPIAAh9IgMgMQgEgDgIgDQgDgBgJAAIAAgFIAyAAIBtCHIAAhnQAAgRgEgEQgEgGgMAAIgGAAIAAgFIA/AAIAAAFIgGAAQgMAAgEAHQgDAEgBAQIAACXg");
	this.shape_81.setTransform(107.45,106.65);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AhNBbIAAgGIAHAAQALABAFgIQADgEAAgQIAAh0QAAgQgEgFQgFgFgKgBIgHAAIAAgEIBRAAIAAAEQgNAAgGAEQgGACgCAEQgCAFAAAQIAABwQAAAMACADQACADADABQADACARAAIANAAQAVAAAIgDQAIgDAHgIQAHgHAHgSIAFABIgQAyg");
	this.shape_82.setTransform(77.725,106.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AhNBbIAAgGIAHAAQALABAFgIQADgEAAgQIAAh0QAAgQgEgFQgFgFgKgBIgHAAIAAgEIBRAAIAAAEQgNAAgGAEQgGACgCAEQgCAFAAAQIAABwQAAAMACADQACADADABQADACARAAIANAAQAVAAAIgDQAIgDAHgIQAHgHAHgSIAFABIgQAyg");
	this.shape_83.setTransform(58.025,106.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AAZBdIAAgGQAKAAAFgDQADgDAAgFQAAgGgFgMIgLgaIhFAAIgNAcQgEALAAAFQAAAFAEADQAEACANABIAAAGIg5AAIAAgGQAMgCADgCQAGgHAJgTIA/iVIAEAAIA/CWQAIASAGAGQAGAFALAAIAAAGgAgmAWIA9AAIgdhIg");
	this.shape_84.setTransform(36.8,106.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#A61316").s().p("AgoBOQgLgNAAgPQAAgMAIgMQAIgMAUgOQgWgRgGgLQgGgKAAgMQAAgRANgNQAOgNAWAAQAVAAAOAMQANAMAAAPQAAAKgHALQgHAKgXAPQAXARAIAKQAKAOAAAPQAAATgPANQgOAOgXAAQgZAAgPgQgAgZAZQgGALAAANQAAARAKAKQAJALANAAQAPAAAJgIQAIgJAAgLQAAgKgFgHQgJgOgcgXQgLAJgFALgAgVhNQgJAIAAAKQAAAHAEAHQADAHAHAGIAVASQAQgOAEgIQAEgJAAgKQAAgOgIgIQgIgIgNAAQgNAAgIAIg");
	this.shape_85.setTransform(8.875,106.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},241).wait(22));

	// Layer_4
	this.instance_1 = new lib.Symbol11();
	this.instance_1.setTransform(146.5,360);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(263));

	// Layer_5
	this.instance_2 = new lib.Symbol36("synched",0);
	this.instance_2.setTransform(421.5,-5.4,0.8765,0.8765);
	this.instance_2.alpha = 0.0313;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(180).to({_off:false},0).wait(1).to({alpha:0.0586},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0.1289},0).wait(1).to({alpha:0.1602},0).wait(1).to({alpha:0.1914},0).wait(1).to({alpha:0.2305},0).wait(1).to({alpha:0.2617},0).wait(1).to({alpha:0.2891},0).wait(1).to({alpha:0.3203},0).wait(1).to({alpha:0.3594},0).wait(1).to({alpha:0.3906},0).wait(1).to({alpha:0.4219},0).wait(1).to({alpha:0.4492},0).wait(1).to({alpha:0.4805},0).wait(1).to({alpha:0.5195},0).wait(1).to({alpha:0.5508},0).wait(1).to({alpha:0.5781},0).wait(1).to({alpha:0.6094},0).wait(1).to({alpha:0.6406},0).wait(1).to({alpha:0.6797},0).wait(1).to({alpha:0.7109},0).wait(1).to({alpha:0.7383},0).wait(1).to({alpha:0.7695},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8398},0).wait(1).to({alpha:0.8711},0).wait(1).to({alpha:0.8984},0).wait(1).to({alpha:0.9297},0).wait(1).to({alpha:0.9688},0).wait(1).to({alpha:1},0).to({_off:true},31).wait(22));

	// Layer_6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgpLgSRMBH4gH+MANxAv9MhY7AEig");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:632.675,y:288.1}).wait(121).to({graphics:null,x:0,y:0}).wait(142));

	// Layer_7
	this.instance_3 = new lib.Symbol8();
	this.instance_3.setTransform(246.95,39.1);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},121).wait(142));

	// Layer_8
	this.instance_4 = new lib.Symbol43();
	this.instance_4.setTransform(901.95,421);
	this.instance_4.alpha = 0.0313;
	this.instance_4._off = true;
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib.Symbol43(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(219).to({_off:false},0).wait(1).to({alpha:0.0781},0).wait(1).to({alpha:0.1289},0).wait(1).to({alpha:0.1719},0).wait(1).to({alpha:0.2109},0).wait(1).to({alpha:0.2617},0).wait(1).to({alpha:0.3086},0).wait(1).to({alpha:0.3594},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.4492},0).wait(1).to({alpha:0.4883},0).wait(1).to({alpha:0.5391},0).wait(1).to({alpha:0.5898},0).wait(1).to({alpha:0.6289},0).wait(1).to({alpha:0.6797},0).wait(1).to({alpha:0.7188},0).wait(1).to({alpha:0.7695},0).wait(1).to({alpha:0.8203},0).wait(1).to({alpha:0.8594},0).wait(1).to({alpha:0.9102},0).wait(1).to({alpha:0.9492},0).wait(1).to({alpha:1},0).to({_off:true},13).wait(10));

	// Layer_9
	this.instance_5 = new lib.Symbol5("synched",0);
	this.instance_5.setTransform(250.9,-3.95,0.9706,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},253).wait(10));

	// Layer_10
	this.instance_6 = new lib.Symbol24("synched",0);
	this.instance_6.setTransform(292.4,101.05,1.1733,1.1733);
	this.instance_6.alpha = 0.8711;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(113).to({_off:false},0).wait(1).to({x:343.75,y:114.05},0).wait(1).to({x:395.05,y:127.05},0).wait(1).to({x:446.4,y:140.05},0).wait(1).to({x:497.75,y:153.05},0).wait(1).to({x:549.05,y:166.05},0).wait(1).to({x:600.4,y:179.05},0).wait(1).to({x:651.75,y:192.05},0).wait(1).to({x:703.05,y:205.05},0).wait(1).to({x:754.4,y:218.05},0).to({_off:true},1).wait(140));

	// Layer_11
	this.instance_7 = new lib.Symbol22("synched",0);
	this.instance_7.setTransform(285.7,-8.1,1,1.6379);

	this.instance_8 = new lib.Symbol24("synched",0);
	this.instance_8.setTransform(403.95,40.6,1,1,29.9999);
	this.instance_8.alpha = 0.1992;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},122).to({state:[]},1).to({state:[{t:this.instance_7}]},1).to({state:[]},1).to({state:[{t:this.instance_7}]},1).to({state:[]},1).to({state:[{t:this.instance_7}]},1).to({state:[]},1).to({state:[{t:this.instance_8}]},52).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},58).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(181).to({_off:false},0).wait(1).to({scaleX:0.9987,scaleY:0.9987,rotation:25.5878,x:389.1,y:49.65,alpha:0.3008},0).wait(1).to({scaleX:0.9989,scaleY:0.9989,rotation:21.3197,x:374.85,y:59.05,alpha:0.3906},0).wait(1).to({scaleX:0.9991,scaleY:0.9991,rotation:17.0523,x:360.95,y:68.95,alpha:0.4883},0).wait(1).to({scaleX:0.9993,scaleY:0.9993,rotation:12.785,x:347.55,y:79.45,alpha:0.5781},0).wait(1).to({scaleX:0.9995,scaleY:0.9995,rotation:8.5213,x:334.45,y:90.45,alpha:0.6797},0).wait(1).to({scaleX:0.9997,scaleY:0.9997,rotation:4.2593,x:321.95,y:101.95,alpha:0.7695},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:310,y:114.05,alpha:0.8711},0).to({_off:true},58).wait(17));

	// Layer_12 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_122 = new cjs.Graphics().p("EhQEgF2MBMkhMkMBYRBYRMhMkBMkg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(122).to({graphics:mask_1_graphics_122,x:542.4963,y:186.5834}).wait(124).to({graphics:null,x:0,y:0}).wait(17));

	// Layer_13
	this.instance_9 = new lib.Symbol21("synched",0);
	this.instance_9.setTransform(251.15,2);
	this.instance_9.alpha = 0.7109;
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(122).to({_off:false},0).to({_off:true},124).wait(17));

	// Layer_14
	this.instance_10 = new lib.Symbol22("synched",0);
	this.instance_10.setTransform(285.7,-8.1,1,1.6379);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(113).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},2).wait(1).to({_off:false},0).to({_off:true},1).wait(142));

	// Layer_15 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_113 = new cjs.Graphics().p("Eg9ygEYMA5ag5aMBCLBCLMg5aA5ag");
	var mask_2_graphics_114 = new cjs.Graphics().p("EhAEgEjMA7hg7hMBEoBEoMg7hA7hg");
	var mask_2_graphics_115 = new cjs.Graphics().p("EhCXgEtMA9qg9qMBHFBHFMg9qA9qg");
	var mask_2_graphics_116 = new cjs.Graphics().p("EhEqgE4MA/yg/yMBJjBJjMg/yA/yg");
	var mask_2_graphics_117 = new cjs.Graphics().p("EhG9gFCMBB7hB7MBMABMAMhB7BB7g");
	var mask_2_graphics_118 = new cjs.Graphics().p("EhJPgFMMBEDhEDMBOcBOcMhEDBEDg");
	var mask_2_graphics_119 = new cjs.Graphics().p("EhLigFXMBGLhGLMBQ6BQ6MhGLBGLg");
	var mask_2_graphics_120 = new cjs.Graphics().p("EhN1gFhMBIUhIUMBTXBTXMhIUBIUg");
	var mask_2_graphics_121 = new cjs.Graphics().p("EhP5gFsMBKbhKbMBV1BV0MhKcBKbg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(113).to({graphics:mask_2_graphics_113,x:181.375,y:-69.475}).wait(1).to({graphics:mask_2_graphics_114,x:223.1759,y:-41.0241}).wait(1).to({graphics:mask_2_graphics_115,x:264.9769,y:-12.5731}).wait(1).to({graphics:mask_2_graphics_116,x:306.7278,y:15.8778}).wait(1).to({graphics:mask_2_graphics_117,x:348.5287,y:44.3287}).wait(1).to({graphics:mask_2_graphics_118,x:390.3296,y:72.7296}).wait(1).to({graphics:mask_2_graphics_119,x:432.1306,y:101.1806}).wait(1).to({graphics:mask_2_graphics_120,x:473.8815,y:129.6315}).wait(1).to({graphics:mask_2_graphics_121,x:514.2609,y:158.0824}).wait(1).to({graphics:null,x:0,y:0}).wait(141));

	// Layer_16
	this.instance_11 = new lib.Symbol21("synched",0);
	this.instance_11.setTransform(251.15,2);
	this.instance_11.alpha = 0.7109;
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(113).to({_off:false},0).to({_off:true},9).wait(141));

	// Layer_17
	this.instance_12 = new lib.Symbol27("synched",0);
	this.instance_12.setTransform(356.95,276.45);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(130).to({_off:false},0).wait(1).to({y:262.75,alpha:0.1914},0).wait(1).to({y:250.55,alpha:0.3594},0).wait(1).to({y:239.75,alpha:0.5117},0).wait(1).to({y:230.35,alpha:0.6406},0).wait(1).to({y:222.45,alpha:0.75},0).wait(1).to({y:215.95,alpha:0.8398},0).wait(1).to({y:210.95,alpha:0.9102},0).wait(1).to({y:207.35,alpha:0.9609},0).wait(1).to({y:205.15,alpha:0.9883},0).wait(1).to({y:204.45,alpha:1},0).to({_off:true},106).wait(17));

	// Layer_18
	this.instance_13 = new lib.Symbol30("synched",0);
	this.instance_13.setTransform(654.15,113.55);
	this.instance_13.alpha = 0.0586;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(152).to({_off:false},0).wait(1).to({alpha:0.1406},0).wait(1).to({alpha:0.2109},0).wait(1).to({alpha:0.2891},0).wait(1).to({alpha:0.3711},0).wait(1).to({alpha:0.4492},0).wait(1).to({alpha:0.5313},0).wait(1).to({alpha:0.6094},0).wait(1).to({alpha:0.6914},0).wait(1).to({alpha:0.7695},0).wait(1).to({alpha:0.8398},0).wait(1).to({alpha:0.9219},0).wait(1).to({alpha:1},0).to({_off:true},82).wait(17));

	// Layer_19
	this.instance_14 = new lib.Symbol33("synched",0);
	this.instance_14.setTransform(494.5,177.7,0.5839,0.5839);
	this.instance_14.alpha = 0.0586;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(176).to({_off:false},0).wait(1).to({scaleX:0.5864,scaleY:0.5864,x:494.1,y:177.35},0).wait(1).to({scaleX:0.5938,scaleY:0.5938,x:492.8,y:176.3,alpha:0.0781},0).wait(1).to({scaleX:0.6061,scaleY:0.6061,x:490.65,y:174.6,alpha:0.1094},0).wait(1).to({scaleX:0.6233,scaleY:0.6233,x:487.65,y:172.15,alpha:0.1484},0).wait(1).to({scaleX:0.6455,scaleY:0.6455,x:483.85,y:169.05,alpha:0.1992},0).wait(1).to({scaleX:0.6725,scaleY:0.6725,x:479.15,y:165.2,alpha:0.2617},0).wait(1).to({scaleX:0.7046,scaleY:0.7046,x:473.6,y:160.7,alpha:0.3281},0).wait(1).to({scaleX:0.7415,scaleY:0.7415,x:467.25,y:155.5,alpha:0.4102},0).wait(1).to({scaleX:0.7834,scaleY:0.7834,x:460.05,y:149.6,alpha:0.5117},0).wait(1).to({scaleX:0.8301,scaleY:0.8301,x:451.95,y:143.05,alpha:0.6211},0).wait(1).to({scaleX:0.8818,scaleY:0.8818,x:442.95,y:135.75,alpha:0.7305},0).wait(1).to({scaleX:0.9385,scaleY:0.9385,x:433.15,y:127.8,alpha:0.8594},0).wait(1).to({scaleX:1,scaleY:1,x:422.5,y:119.05,alpha:1},0).to({_off:true},57).wait(17));

	// Layer_20
	this.instance_15 = new lib.Symbol3();
	this.instance_15.setTransform(253.15,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(263));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = rect = new cjs.Rectangle(500.5,246.1,1003.2,516);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(500.5,241.9,1003.2,520.2), new cjs.Rectangle(500.5,246.1,1003.2,516), new cjs.Rectangle(500.5,241.9,1003.2,520.2), new cjs.Rectangle(500.5,246.1,1003.2,516), rect=new cjs.Rectangle(500.5,241.9,1003.2,520.2), rect, new cjs.Rectangle(500.5,246.1,1003.2,516), new cjs.Rectangle(500.5,241.9,1003.2,520.2), new cjs.Rectangle(500.5,246.1,1003.2,516), new cjs.Rectangle(500.5,241.9,1003.2,520.2), new cjs.Rectangle(500.5,246.1,1003.2,516), new cjs.Rectangle(500.5,241.9,1003.2,520.2), new cjs.Rectangle(500.5,246.1,1003.2,516), new cjs.Rectangle(500.5,241.9,1003.2,520.2), new cjs.Rectangle(500.5,246.1,1003.2,516), new cjs.Rectangle(500.5,241.9,1003.2,520.2), rect=new cjs.Rectangle(500.5,246.1,1003.2,516), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(500.5,244.6,1003.2,517.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(500.5,244.6,1020.9,517.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(507.5,246.1,1013.9,516), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(507.5,251.1,996.2,510), rect, rect, rect, rect, rect, rect, rect, rect, rect];
// library properties:
lib.properties = {
	id: '0D799387FDA7E0488EB22BB294D32CFD',
	width: 1001,
	height: 500,
	fps: 12,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/bitmap1.jpg", id:"bitmap1"},
		{src:"images/bitmap20.png", id:"bitmap20"},
		{src:"images/bitmap23.png", id:"bitmap23"},
		{src:"images/bitmap26.png", id:"bitmap26"},
		{src:"images/bitmap29.png", id:"bitmap29"},
		{src:"images/bitmap32.png", id:"bitmap32"},
		{src:"images/bitmap35.png", id:"bitmap35"},
		{src:"images/bitmap37.png", id:"bitmap37"},
		{src:"images/bitmap4.png", id:"bitmap4"},
		{src:"images/bitmap40.png", id:"bitmap40"},
		{src:"images/bitmap9.png", id:"bitmap9"},
		{src:"sounds/sound18.mp3", id:"sound18"},
		{src:"sounds/sound25.mp3", id:"sound25"},
		{src:"sounds/sound28.mp3", id:"sound28"},
		{src:"sounds/sound31.mp3", id:"sound31"},
		{src:"sounds/sound34.mp3", id:"sound34"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0D799387FDA7E0488EB22BB294D32CFD'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;