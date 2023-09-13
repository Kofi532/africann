
var width = window.innerWidth;
var height = window.innerHeight;

// var width = 1000;
// var height = 1000;

var stage = new Konva.Stage({

  container: 'container',
  width: width,
  height: height,
});

var layer = new Konva.Layer();

//anibere
var anibere = new Konva.Group({
    x: 0,
    y: 0,
    scaleX:2,
    scaleY:2,
  });

  var anibere1 = new Konva.Rect({
    x: 85,
    y: -10,
    fill: 'pink',
    width: 50,
    height: 50,
    stroke: 'black',
    strokeWidth: 5,
    rotation: 45,
  });

  const anibere2 = anibere1.clone();
  anibere2.y(70);

const anibere3 = anibere2.clone();
anibere3.x(130);
anibere3.y(30);

const anibere4 = anibere3.clone();
anibere4.x(40);

const anibere5 = anibere4.clone();
anibere5.y(-50);

const anibere6 = anibere4.clone();
anibere6.y(110);

const anibere7 = anibere3.clone();
anibere7.y(-50);

const anibere8 = anibere3.clone();
anibere8.y(110);

const anibere9 = anibere1.clone();
anibere9.x(-5);

const anibere10 = anibere1.clone();
anibere10.x(175);

const anibere11 = anibere2.clone();
anibere11.x(-5);

const anibere12 = anibere2.clone();
anibere12.x(175);

var anibere13 = new Konva.Rect({
    x: -55,
    y: -65,
    fill: 'white',
    width: 280,
    height: 50,
    stroke: 'white',
    strokeWidth: 1,
  });

const anibere14 = anibere13.clone();
anibere14.y(145);

var anibere15 = new Konva.Rect({
    x: -55,
    y: -50,
    fill: 'white',
    width: 50,
    height: 200,
    stroke: 'white',
    strokeWidth: 1,
  });
const anibere16 = anibere15.clone();
anibere16.x(175);

anibere.add(anibere1).add(anibere2).add(anibere3).add(anibere4).add(anibere5).add(anibere6).add(anibere7).add(anibere8).add(anibere9).add(anibere10).add(anibere11).add(anibere12).add(anibere13).add(anibere14).add(anibere15).add(anibere16);
layer.add(anibere);

stage.add(layer);
