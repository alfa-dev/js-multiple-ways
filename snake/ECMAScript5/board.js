var Board = function(game) {
  this.scale = game.scale;
  this.cols  = game.cols;
  this.rows  = game.rows;
}

Board.prototype.generateBoard = function(target){
  this.generateStyleSheet();

  var board = document.createElement('div');
  var house;

  board.id = 'board';

  for (var y = 0; y < this.cols; y++) {
    for (var x = 0; x < this.rows; x++) {
      board.appendChild(this.createHouse('x' + x + 'y' + y));
    }
  }

  target.appendChild(board);
};

Board.prototype.generateStyleSheet = function(){
  var style = document.createElement('style');
  var head  = document.querySelector('head');

  style.innerHTML = '                          \
    .house {                                   \
      width:' + this.scale + 'px;              \
      height:' + this.scale +'px;              \
    }                                          \
    #board {                                   \
      width:' + this.scale * this.cols + 'px;  \
      height:' + this.scale * this.rows + 'px; \
    }                                          \
  ';

  head.appendChild(style);
};

Board.prototype.createHouse = function(id){
  var house = document.createElement('span');
  house.classList.add('house');
  house.setAttribute('id', id);

  return house;
};