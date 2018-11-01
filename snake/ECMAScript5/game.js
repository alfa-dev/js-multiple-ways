var Game = function(options) {
  this.scale = options.scale;
  this.speed = options.speed;
  this.cols  = options.cols;
  this.rows  = options.rows;

  this.updateInterval;

  this.board = new Board(this);

  return this;
}

Game.prototype.start = function(){
  this.updateInterval = setInterval(this.update, 1000 / this.speed);
  console.log(this.updateInterval);
};


Game.prototype.over = function(){
  clearInterval(this.updateInterval);
};

Game.prototype.update = function(argument){
  var self = this;
  try {
    snake.walk();
  } catch(e) {
    self.over();
  }
};
