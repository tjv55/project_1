var gameport = document.getElementById("gameport");
var renderer = PIXI.autoDetectRenderer(512, 480);
gameport.appendChild(renderer.view);
var stage = new PIXI.Container();
var hero = new PIXI.Sprite(PIXI.Texture.fromImage("hero.png"));
var ham = new PIXI.Sprite(PIXI.Texture.fromImage("ham.png"));
var map = new PIXI.Sprite(PIXI.Texture.fromImage("background.png"))
var counter = 0;
hero.position.x = 100;
hero.position.y = 100;
ham.position.x = 250;
ham.position.y = 250;
stage.addChild(map);
stage.addChild(hero);
stage.addChild(ham);

function resetTwo()
{
 if(counter <= 15)
 {
  var new_x = ham.position.x + 10;
  var new_y = ham.position.y - 10;
  counter++
 }
 if(counter > 15)
 {
   var new_x = 100;
   var new_y = 300;
   counter = 0;
 }

  hero.position.x = 100;
  hero.position.y = 100;
  ham.position.x = new_x;
  ham.position.y = new_y;
  stage.addChild(hero);
  stage.addChild(ham);


}

function collision()
{
  if(hero.position.x == ham.position.x  && hero.position.y == ham.position.y)
  {
      resetTwo();
  }

}

function keydownEventHandler(e)
{

  if (e.keyCode == 87)
  { // W key
    hero.position.y -= 10;
    collision();
  }

  if (e.keyCode == 83)
  { // S key
    hero.position.y += 10;
    collision();
  }

  if (e.keyCode == 65)
  { // A key
    hero.position.x -= 10;
    collision();
  }

  if (e.keyCode == 68)
  { // D key
    hero.position.x += 10;
    collision();
  }

}


document.addEventListener('keydown', keydownEventHandler);

function animate()
{
  requestAnimationFrame(animate);
  renderer.render(stage);
}
animate();
