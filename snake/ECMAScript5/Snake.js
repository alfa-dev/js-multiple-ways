var Snake = function(options){
  this.pos = { x: 0, y: 0 };
  this.direction = { x: 1, y: 0 };
  this.size = 1;

  this.cols = options.cols;
  this.rows = options.rows;

  this.update();
  this.generateFood();
};

Snake.prototype = {
  up:    function() { this.direction = { x: 0, y:-1 }; },
  down:  function() { this.direction = { x: 0, y: 1 }; },
  left:  function() { this.direction = { x:-1, y: 0 }; },
  right: function() { this.direction = { x: 1, y: 0 }; }
};

Snake.prototype.update = function(){
  this.setHead();
  this.detectBodyLife();
  this.detectFood();
};

Snake.prototype.detectFood = function(){
  if(this.head.classList.contains('food')) {
    this.head.classList.remove('food');
    this.generateFood();
    this.size++;
  }
};

Snake.prototype.setHead = function(){
  this.head = getHouse(this.pos.x, this.pos.y);
  this.head.classList.add('body');
  this.head.setAttribute('life', this.size);
};

Snake.prototype.detectBodyLife = function(){
  document.querySelectorAll('.body').forEach(function(body){
    var life = parseInt(body.getAttribute('life'));

    if(life === 0) body.classList.remove('body');

    body.setAttribute('life', life - 1);
  });
};

Snake.prototype.walk = function() {
  this.pos.x += this.direction.x;
  this.pos.y += this.direction.y;

  this.update();
};

Snake.prototype.generateFood = function(){
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  var x = getRandomInt(0, this.cols);
  var y = getRandomInt(0, this.rows);
  var food = getHouse(x, y);

  if(food.classList.contains('body')) {
    this.generateFood();
    console.log('food colide body');
    return false;
  }

  food.classList.add('food');
};